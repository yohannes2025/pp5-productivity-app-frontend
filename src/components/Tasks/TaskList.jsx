// Tasks/TaskList.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function TaskList() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // Fetch tasks from the server and update the state
    fetchTasks();
  }, []);

  const fetchTasks = () => {
    // Add logic to fetch tasks from the server
    setTasks([
      { id: 1, title: "Task 1", description: "This is task 1" },
      { id: 2, title: "Task 2", description: "This is task 2" },
      { id: 3, title: "Task 3", description: "This is task 3" },
    ]);
  };

  return (
    <div>
      <h2>Task List</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <Link to={`/tasks/${task.id}`}>{task.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
