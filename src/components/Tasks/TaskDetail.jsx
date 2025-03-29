// Tasks/TaskDetail.jsx
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function TaskDetail() {
  const { id } = useParams();
  const [task, setTask] = useState(null);

  useEffect(() => {
    // Fetch the task details from the server and update the state
    fetchTaskDetails();
  }, [id]);

  const fetchTaskDetails = () => {
    // Add logic to fetch the task details from the server
    setTask({
      id: 1,
      title: "Task 1",
      description: "This is task 1",
      status: "Pending",
    });
  };

  if (!task) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{task.title}</h2>
      <p>{task.description}</p>
      <p>Status: {task.status}</p>
      {/* Add additional task details and functionality */}
    </div>
  );
}

export default TaskDetail;
