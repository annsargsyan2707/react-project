import ReactDOM from "react-dom/client";
import React from "react";
import "./index.css";
import { useState } from "react";
import Header from "./Header/Header.jsx";
import TodoList from "./TodoList/TodoList.jsx";
import AddTodo from "./AddTodo/AddTodo.jsx";

const App = () => {
  const headerText = "Todo App";
  const text = "add text";

  const [todoItems, setTodoItems] = useState([]);
  // const [filteredTodoItems, setFilteredTodoItems] = useState([]);
  const [searchText, setSearchText] = useState("");
  const filteredTodos = todoItems.filter((todo) =>
    todo.item.toLowerCase().includes(searchText.toLocaleLowerCase())
  );
  // const handleSearch = (taskName) => {
  //   console.log("taskName", taskName);
  //   if (taskName) {
  //     const newTodoItems = todoItems.filter((obj) => {
  //       console.log(obj);
  //       return obj.item.includes(taskName);
  //     });
  //     console.log("newTodoItems", newTodoItems);
  //     setFilteredTodoItems(newTodoItems);
  //   } else {
  //     setFilteredTodoItems(todoItems);
  //   }
  // };
  const handleDelete = (id) => {
    console.log(`delete ${id}`);
    const newTodoItems = todoItems.filter((obj) => obj.id !== id);
    setTodoItems(newTodoItems);
    //setFilteredTodoItems(newTodoItems);
  };

  const handleEdit = (id) => {
    console.log(id);
  };

  const handleAdd = (text) => {
    todoItems.push({
      item: text,
      id: todoItems.length ? todoItems[todoItems.length - 1].id + 1 : 1,
    });
    setTodoItems([...todoItems]);
    //setFilteredTodoItems([...todoItems]);
  };

  return (
    <div className="app">
      <Header
        text={headerText}
        searchText={searchText}
        setSearchText={setSearchText}
      />
      <TodoList
        todoItems={filteredTodos}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
      />
      <AddTodo handleAdd={handleAdd} text={text} />
    </div>
  );
};
ReactDOM.createRoot(document.getElementById("root")).render(<App />);
