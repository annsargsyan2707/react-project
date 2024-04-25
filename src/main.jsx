import ReactDOM from "react-dom/client";
import React from "react";
import "./index.css";
import Header from "./Header/Header.jsx";
import TodoList from "./TodoList/TodoList.jsx";
import AddTodo from "./AddTodo/AddTodo.jsx";

const jsxEl = (
  <div className="app">
    <Header />
    <TodoList />
    <AddTodo />
  </div>
);

ReactDOM.createRoot(document.getElementById("root")).render(jsxEl);
