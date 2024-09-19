import React, { useState } from "react";
import "./styles.css";

const TaskForm = ({ addTask }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !description || !dueDate) {
      setError("All fields are required!");
      return;
    }
    addTask({ title, description, dueDate });
    setTitle("");
    setDescription("");
    setDueDate("");
    setError("");
  };

  return (
    <form className="formStyles" onSubmit={handleSubmit}>
      <label className="textStyles" htmlFor="title">
        Title
      </label>
      <input
        id="title"
        type="text"
        placeholder="Task Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <label className="textStyles" htmlFor="title">
        Description
      </label>
      <input
        type="text"
        placeholder="Task Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <label className="textStyles" htmlFor="title">
        Due Date
      </label>
      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />

      <button type="submit">Add Task</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </form>
  );
};

export default TaskForm;
