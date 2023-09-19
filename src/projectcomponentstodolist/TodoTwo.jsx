import React, { useEffect, useState } from "react";


function TodoTwo() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    if(localStorage.getItem("localTasks")) {
        const storedTasks = JSON.parse(localStorage.getItem("localTasks"))
        setTasks(storedTasks)
    }
  },[])

  function addTask(e) {
    e.preventDefault();

    if (task) {
      const newTask = { id: new Date().getTime().toString(), title: task };
      setTasks([...tasks, newTask]);
      localStorage.setItem("localTasks", JSON.stringify([...tasks, newTask]));
      setTask("");
    }
  }

  function handleDelete(task) {
    const deleted = tasks.filter((t) => t.id !== task.id);
    setTasks(deleted);
    localStorage.setItem("localTasks", JSON.stringify(deleted));
  }

  function clearAllTasks() {
    setTasks([]);
    localStorage.removeItem("localTasks");
  }
  return (
    <div>
      <h1>To-Do App</h1>
      <div>
        <input
          type="text"
          name="task"
          value={task}
          placeholder="Input Your Task
            "
          onChange={(e) => setTask(e.target.value)}
        />
      </div>
      <div>
        <button onClick={addTask}>Add Task</button>
      </div>
      <div>
        You have{" "}
        {!tasks.length
          ? "No Tasks"
          : tasks.length === 1
          ? "One Task"
          : tasks.length > 1
          ? `${tasks.length} Tasks`
          : null}
      </div>
      {tasks.map((task) => (
        <div key={task.id}>
          <div>
            <span>{task.title}</span>
          </div>
          <div>
            <button onClick={() => handleDelete(task)}>Delete</button>
          </div>
        </div>
      ))}

      {!tasks.length ? null : (
        <div>
          <button onClick={() => clearAllTasks()}>Clear All</button>
        </div>
      )}
    </div>
  );
}

export default TodoTwo;
