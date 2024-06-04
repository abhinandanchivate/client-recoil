import logo from "./logo.svg";
import "./App.css";
import { RecoilRoot } from "recoil";
import AddTodo from "./todos/components/AddTodo";
import TodoList from "./todos/components/TodoList";

function App() {
  return (
    <RecoilRoot>
      <h1>Todo App</h1>
      <AddTodo></AddTodo>
      <TodoList></TodoList>
    </RecoilRoot>
  );
}

export default App;
