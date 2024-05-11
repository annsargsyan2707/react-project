import ReactDOM from "react-dom/client";
import React from "react";
import "./index.css";
import Header from "./Header/Header.jsx";
import TodoList from "./TodoList/TodoList.jsx";
import AddTodo from "./AddTodo/AddTodo.jsx";

const App = () => {
  const headerText = "Todo App";
  const todoItems = [
    { item: "Buy a new gaming laptop", id: 1 },
    { item: "Complete a previous task", id: 2 },
    { item: "Create new portfolio website", id: 3 },
    { item: "Create video gor youtube", id: 4 },
    { item: "Go to the gym", id: 5 },
  ];
  const text = "add text";
  const handleDelete = (id) => {
    console.log(`delete ${id}`);
  };
  const handleEdit = (id) => {
    console.log(`edit ${id}`);
  };
  const handleAdd = (text) => {
    console.log(text);
  };

  return (
    <div className="app">
      <Header text={headerText} />
      <TodoList
        todoItems={todoItems}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
      />
      <AddTodo handleAdd={handleAdd} text={text} />
    </div>
  );
};
ReactDOM.createRoot(document.getElementById("root")).render(<App />);
