import React from "react";
import TaskItem from "./TaskItem";
import "./styles.css";

const TaskList = ({ tasks, editTask, deleteTask }) => {
  return (
    <ul>
      {tasks
        .sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate))
        .map((task, index) => (
          <TaskItem
            key={index}
            task={task}
            index={index}
            editTask={editTask}
            deleteTask={deleteTask}
          />
        ))}
    </ul>
  );
};

export default TaskList;
