import React from "react";
import { useRecoilState } from "recoil";
import { todoListState } from "../../recoil/atoms/todoState";

function removeItemAtIndex(arr, index) {
  return [...arr.slice(0, index), ...arr.slice(index + 1)];
}
function replaceItemAtIndex(arr, index, newValue) {
  return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
}
const TodoItem = ({ item }) => {
  // edit , delete & render
  const [todoList, setTodoList] = useRecoilState(todoListState);
  // array : index :
  const index = todoList.findIndex((listItem) => listItem === item);

  const editItemText = ({ target: { value } }) => {
    // e.target.value
    // new value : object : {}
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      text: value,
    });
    setTodoList(newList);
  };
  const deleteItem = () => {
    // we have to remove the item from the todolist
    // todoList===> a method ==> will remove the item from the list and will share the new array.
    // can we replace old array with new array.
    const newList = removeItemAtIndex(todoList, index);
    setTodoList(newList);
  };
  const toggleItemCompletion = () => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      isComplete: !item.isComplete,
    });
    setTodoList(newList);
  };
  return (
    <div>
      <input type="text" value={item.text} onChange={editItemText} />
      <input
        type="checkbox"
        checked={item.isComplete}
        onChange={toggleItemCompletion}
      />
      <button onClick={deleteItem}>Delete</button>
    </div>
  );
};

export default TodoItem;
