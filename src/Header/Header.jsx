import { useState } from "react";

export default function Header({ text, searchText, setSearchText }) {
  return (
    <div className="header">
      <h1>{text}</h1>
      <input
        onChange={(e) => setSearchText(e.target.value)}
        value={searchText}
        type="text"
        placeholder="Filter ToDos"
        className="add-todo-input search-input"
      />
    </div>
  );
}
