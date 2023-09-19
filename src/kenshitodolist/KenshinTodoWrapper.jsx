import React, { useState, useEffect } from "react";
import { KenshinTodoForm } from "./KenshinTodoForm";
import { v4 as uuidv4 } from "uuid";
import KenshinTodo from "./KenshinTodo";
import { EditKenshinTodo } from "./EditKenshinTodo";

uuidv4();

export const KenshinTodoWrapper = () => {
  const [myTodos, setMyTodos] = useState([]);

  function addTodos(todos) {
    const newTask = {
      tId: uuidv4(),
      todoTask: todos,
      completedTask: false,
      taskEdit: false,
    };
    setMyTodos([...myTodos, newTask]);
    localStorage.setItem("todoTasks", JSON.stringify([...myTodos, newTask]));
  }

  useEffect(() => {
    if (localStorage.getItem("todoTasks")) {
      const storedTasks = JSON.parse(localStorage.getItem("todoTasks"));
      setMyTodos(storedTasks);
    }
  }, []);

  function deleteTodo(id) {
    const deletedTasks = myTodos.filter((myTodo) => myTodo.tId !== id);
    setMyTodos(deletedTasks);
    localStorage.setItem("todoTasks", JSON.stringify(deletedTasks));
  }

  function editTodo(id) {
    setMyTodos(
      myTodos.map((todo) =>
        todo.tId === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  }

  // function editTask(todoTask, id) {
  //   const editedTasks = myTodos.map((todo) =>
  //     todo.tId === id ? { ...todo, todoTask, isEditing: !todo.isEditing } : todo
  //   );
  //   setMyTodos([...myTodos, editedTasks]);
  // }

  function editTask(todoTask, id) {
    const editedTsk = myTodos.map((todo) =>
      todo.tId === id ? { ...todo, todoTask, isEditing: !todo.isEditing } : todo
    );
    setMyTodos(editedTsk);
    localStorage.setItem("todoTasks", JSON.stringify([...myTodos, editedTsk]));
  }

  function clearAllTasks() {
    setMyTodos([]);
    localStorage.removeItem("todoTasks");
  }

  return (
    <div>
      <h1>Kenshin To-Do App</h1>
      <KenshinTodoForm addTodos={addTodos} />
      <div>
        You Have{" "}
        {!myTodos.length
          ? "No Task"
          : myTodos.length === 1
          ? "One Task"
          : myTodos.length > 1
          ? `${myTodos.length} Tasks`
          : null}
      </div>
      {myTodos.map((todos, index) =>
        todos.isEditing ? (
          <EditKenshinTodo editTodo={editTask} todoTask={todos} />
        ) : (
          <KenshinTodo
            todoTask={todos}
            key={index}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        )
      )}
      {!myTodos.length ? null : (
        <div>
          <button onClick={() => clearAllTasks()}>Clear All</button>
        </div>
      )}
    </div>
  );
};
