export default function Header() {
  return (
    <div className="header">
      <h1>Todo list</h1>
      <input
        type="text"
        placeholder="Filter ToDos"
        className="add-todo-input search-input"
      />
    </div>
  );
}
