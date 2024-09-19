import React, { useState } from "react";
import TaskForm from "./TaskForm"; // Ensure this path is correct
import TaskList from "./TaskList"; // Ensure this path is correct

import "./styles.css";

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const editTask = (updatedTask, index) => {
    const newTasks = tasks.map((task, i) => (i === index ? updatedTask : task));
    setTasks(newTasks);
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div className="App">
      <h1>Personal Task Manager</h1>
      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks} editTask={editTask} deleteTask={deleteTask} />
      <div>Total Tasks: {tasks.length}</div>
    </div>
  );
};

export default App;
