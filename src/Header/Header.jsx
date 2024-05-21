import { useState } from "react";

export default function Header({ text, handleSearch }) {
  const value = 
  return (
    <div className="header">
      <h1>{text}</h1>
      <input
        type="text"
        placeholder="Filter ToDos"
        className="add-todo-input search-input"
      />
    </div>
  );
}
