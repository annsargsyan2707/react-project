import ReactDOM from "react-dom/client";
import React from "react";
import "./index.css";
import { useState } from "react";
import Header from "./Header/Header.jsx";
import TodoList from "./TodoList/TodoList.jsx";
import AddTodo from "./AddTodo/AddTodo.jsx";

const App = () => {
  const headerText = "Todo App";

  const [todoItems, setTodoItems] = useState([]);

  const text = "add text";

  const handleSearch = (text) => {
    const newArr = arr.filter((obj) => {
      obj.text.includes(text);
      setTodoItems(newArr);
    });
  };
  const handleDelete = (id) => {
    console.log(`delete ${id}`);
    const newTodoItems = todoItems.filter((obj) => obj.id !== id);
    setTodoItems(newTodoItems);
  };

  const handleEdit = (id) => {
    console.log(`edit ${id}`);
  };

  const handleAdd = (text) => {
    todoItems.push({
      item: text,
      id: todoItems.length ? todoItems[todoItems.length - 1].id + 1 : 1,
    });
    setTodoItems([...todoItems]);
  };

  return (
    <div className="app">
      <Header text={headerText} handleSearch={handleSearch} />
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
