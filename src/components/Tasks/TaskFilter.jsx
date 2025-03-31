//TaskFilter.jsx:
import React, { useState } from "react";

const TaskFilter = ({ tasks, onFilterChange }) => {
  const [selectedStatus, setSelectedStatus] = useState("all");

  const handleStatusChange = (e) => {
    setSelectedStatus(e.target.value);
    onFilterChange(e.target.value);
  };

  return (
    <div className="task-filter">
      <h3>Filter Tasks</h3>
      <div className="filter-options">
        <label>
          <input
            type="radio"
            name="status"
            value="all"
            checked={selectedStatus === "all"}
            onChange={handleStatusChange}
          />
          All
        </label>
        <label>
          <input
            type="radio"
            name="status"
            value="todo"
            checked={selectedStatus === "todo"}
            onChange={handleStatusChange}
          />
          To Do
        </label>
        <label>
          <input
            type="radio"
            name="status"
            value="in-progress"
            checked={selectedStatus === "in-progress"}
            onChange={handleStatusChange}
          />
          In Progress
        </label>
        <label>
          <input
            type="radio"
            name="status"
            value="done"
            checked={selectedStatus === "done"}
            onChange={handleStatusChange}
          />
          Done
        </label>
      </div>
    </div>
  );
};

export default TaskFilter;
