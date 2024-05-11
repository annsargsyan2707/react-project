const AddTodo = ({ text, handleAdd }) => {
  return (
    <div className="add-todo-form">
      <input type="text" placeholder="Add Todo" className="add-todo-input" />
      <button
        className=" item-button edit-button"
        onClick={() => {
          handleAdd(text);
        }}
      >
        {" "}
        Add
      </button>
    </div>
  );
};
export default AddTodo;
