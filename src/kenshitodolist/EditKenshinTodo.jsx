import React from "react";
import { useState } from "react";

export const EditKenshinTodo = ({ editTodo, todoTask }) => {
  const [inputValue, setInputValue] = useState(todoTask.todoTask);

  function handleSubmit(e) {
    e.preventDefault();
    if (!inputValue.trim()) {
      alert("Input Task Please");
    } else {
      editTodo(inputValue, todoTask.tId);
      setInputValue("");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="kenshin--form">
      <input
        className="kenshin--input"
        type="text"
        value={inputValue}
        placeholder="Input Your Task Here"
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button type="submit" className="todo-btn">
        Update Task
      </button>
    </form>
  );
};
