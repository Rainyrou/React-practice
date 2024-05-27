import React, { useState } from "react";

function TodoList() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [dragging, setDragging] = useState(false);
  const [draggedItemIndex, setDraggedItemIndex] = useState(null);

  const handleInput = (e) => setInput(e.target.value);
  const addTodo = () => {
    if (input.trim() !== "") {
      setTodos([...todos, { id: Date.now(), text: input, completed: false }]);
      setInput("");
    }
  };
  const deleteTodo = (id) => setTodos(todos.filter((todo) => todo.id !== id));
  const toggleTodo = (id) =>
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );

  const handleDragStart = (e, index) => {
    setDraggedItemIndex(index);
    setDragging(true);
  };

  const handleDragEnter = (e, index) => {
    if (dragging) {
      const draggedOverItemIndex = index;
      if (draggedItemIndex !== draggedOverItemIndex) {
        const items = [...todos];
        const item = items[draggedItemIndex];
        items.splice(draggedItemIndex, 1);
        items.splice(draggedOverItemIndex, 0, item);
        setDraggedItemIndex(draggedOverItemIndex);
        setTodos(items);
      }
    }
  };

  const handleDragEnd = () => {
    setDragging(false);
    setDraggedItemIndex(null);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-5 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Todo List</h1>
      <div className="flex mb-4">
        <input
          type="text"
          value={input}
          onChange={handleInput}
          className="flex-grow p-2 border rounded-l-md focus:outline-none"
          placeholder="Add a new task"
        />
        <button
          onClick={addTodo}
          className="p-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600"
        >
          Add
        </button>
      </div>
      <ul>
        {todos.map((todo, index) => (
          <li
            key={todo.id}
            draggable
            onDragStart={(e) => handleDragStart(e, index)}
            onDragEnter={(e) => handleDragEnter(e, index)}
            onDragEnd={handleDragEnd}
            className={`flex justify-between items-center p-2 border-b ${
              todo.completed ? "line-through text-gray-500" : ""
            }`}
          >
            {todo.text}
            <div>
              <button
                onClick={() => toggleTodo(todo.id)}
                className="p-1 bg-green-500 text-white rounded-md mr-2 hover:bg-green-600"
              >
                Toggle
              </button>
              <button
                onClick={() => deleteTodo(todo.id)}
                className="p-1 bg-red-500 text-white rounded-md hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
