import React, { useState } from "react";
import { RecoilState, useSetRecoilState } from "recoil";
import { todoListState } from "../../recoil/atoms/todoState";
let id = 0;
function getId() {
  return id++;
}
const AddTodo = () => {
  // useState
  const [inputValue, setInputValue] = useState("");
  // recoilState
  const setTodoList = useSetRecoilState(todoListState);

  const addItem = () => {
    setTodoList((oldTodoList) => [
      ...oldTodoList,
      {
        id: getId(),
        text: inputValue,
        isComplete: false,
      },
    ]);
    setInputValue("");
  };
  return <div>AddTodo</div>;
};

export default AddTodo;
