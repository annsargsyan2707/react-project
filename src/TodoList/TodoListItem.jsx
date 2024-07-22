import { useState } from "react";

const TodoListItem = ({ id, item, handleDelete, handleEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [inputValue, setInputValue] = useState(item);

  const handleChangeInput = (e) => {
    setInputValue(e.target.value);
  };

  const handleDragStart = (e, id) => {
    e.dataTransfer.setData("text/plain", id);
  };
  return (
    <li className="todo-item" draggable="true" onDragStart={handleDragStart}>
      {isEditing ? (
        <input type="text" value={inputValue} onChange={handleChangeInput} />
      ) : (
        <span className="item-text">
          {id} {item}
        </span>
      )}
      <span className="item-buttons">
        <button
          className="item-button edit-button"
          onClick={() => {
            if (isEditing) {
              handleEdit(id, inputValue);
            }
            setIsEditing(!isEditing);
          }}
        >
          {isEditing ? "Save" : "Edit"}
        </button>
        <button
          className="item-button"
          onClick={() => {
            handleDelete(id);
          }}
        >
          Delete
        </button>
      </span>
    </li>
  );
};
export default TodoListItem;
