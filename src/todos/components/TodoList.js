import React from "react";
import { useRecoilValue } from "recoil";
import { filterState, todoListState } from "../../recoil/atoms/todoState";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const todoList = useRecoilValue(todoListState); // array
  // container based mechanism.==> this component will help us to traverse the array and we need theitme component to render the data.

  return (
    <div>
      {todoList.map((e) => (
        <TodoItem key={e.id} item={e}></TodoItem>
      ))}
    </div>
  );
};

export default TodoList;
