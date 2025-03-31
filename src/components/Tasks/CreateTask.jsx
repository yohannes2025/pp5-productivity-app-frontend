//src/components/Tasks/CreatTask.jsx
import React, { useState } from "react";
import axios from "axios";

function CreateTask() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleCreateTask = async (e) => {
    e.preventDefault();
    try {
      const authToken = localStorage.getItem("authToken");
      await axios.post(
        "/api/tasks",
        { title, description },
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      );
      // Clear the form fields
      setTitle("");
      setDescription("");
      // Display a success message to the user
      alert("Task created successfully!");
    } catch (error) {
      console.error("Error creating task:", error);
      // Display an error message to the user
      alert("Failed to create task. Please try again later.");
    }
  };

  return (
    <div>
      <h2>Create Task</h2>
      <form onSubmit={handleCreateTask}>
        <label>
          Title:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <label>
          Description:
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <button type="submit">Create Task</button>
      </form>
    </div>
  );
}

export default CreateTask;
