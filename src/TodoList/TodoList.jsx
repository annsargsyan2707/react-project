import TodoListItem from "./TodoListItem";
import { useState } from "react";

const TodoList = ({ todoItems, handleDelete, handleEdit, inputValue }) => {
  const jsxArray = todoItems.map((obj) => {
    return (
      <TodoListItem
        item={obj.item}
        id={obj.id}
        key={obj.id}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
        inputValue={inputValue}
      />
    );
  });

  return <ul>{jsxArray}</ul>;
};
export default TodoList;
