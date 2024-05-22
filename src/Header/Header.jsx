import { useState } from "react";

export default function Header({ text, handleSearch }) {
  const [searchText, setSearchText] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchText(value);
    handleSearch(value);
  };

  return (
    <div className="header">
      <h1>{text}</h1>
      <input
        onChange={handleChange}
        value={searchText}
        type="text"
        placeholder="Filter ToDos"
        className="add-todo-input search-input"
      />
    </div>
  );
}
