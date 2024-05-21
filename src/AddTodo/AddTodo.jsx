import { useState } from "react";

const AddTodo = ({ handleAdd }) => {
  const [todoText, setTodoText] = useState("");
  const handleChange = (e) => {
    setTodoText(e.target.value);
  };
  const handleButtonClicked = () => {
    if (todoText) {
      handleAdd(todoText);
      setTodoText("");
    }
  };
  return (
    <div className="add-todo-form">
      <input
        onChange={handleChange}
        value={todoText}
        type="text"
        placeholder="Add Todo"
        className="add-todo-input"
      />
      <button
        className=" item-button edit-button"
        onClick={handleButtonClicked}
      >
        {" "}
        Add
      </button>
    </div>
  );
};
export default AddTodo;
