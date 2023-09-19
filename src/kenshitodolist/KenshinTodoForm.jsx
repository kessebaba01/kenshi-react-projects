import React, { useState } from "react";

export const KenshinTodoForm = ({ addTodos }) => {
  const [inputValue, setInputValue] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!inputValue.trim()) {
      alert("Input Task Please");
    } else {
      addTodos(inputValue);
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
        Add Task
      </button>
    </form>
  );
};
