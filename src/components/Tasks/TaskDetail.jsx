// // Tasks/TaskDetail.jsx
// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";

// function TaskDetail() {
//   const { id } = useParams();
//   const [task, setTask] = useState(null);

//   useEffect(() => {
//     // Fetch the task details from the server and update the state
//     fetchTaskDetails();
//   }, [id]);

//   const fetchTaskDetails = () => {
//     // Add logic to fetch the task details from the server
//     setTask({
//       id: 1,
//       title: "Task 1",
//       description: "This is task 1",
//       status: "Pending",
//     });
//   };

//   if (!task) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <h2>{task.title}</h2>
//       <p>{task.description}</p>
//       <p>Status: {task.status}</p>
//       {/* Add additional task details and functionality */}
//     </div>
//   );
// }

// export default TaskDetail;


// Tasks/TaskDetail.jsx
// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { useParams } from "react-router-dom";

// function TaskDetail() {
//   const navigate = useNavigate();
//   const [task, setTask] = useState(null);

//   useEffect(() => {
//     // Get the task ID from the URL
//     const taskId = new URLSearchParams(window.location.search).get("id");

//     // Fetch the task details from the server and update the state
//     fetchTaskDetails(taskId);
//   }, []);

//   const fetchTaskDetails = (id) => {
//     // Add logic to fetch the task details from the server
//     setTask({
//       id: 1,
//       title: "Task 1",
//       description: "This is task 1",
//       status: "Pending",
//     });
//   };

//   if (!task) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <h2>{task.title}</h2>
//       <p>{task.description}</p>
//       <p>Status: {task.status}</p>
//       {/* Add additional task details and functionality */}
//     </div>
//   );
// }

// export default TaskDetail;

// Tasks/TaskDetail.jsx
// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom"; // Corrected import

// function TaskDetail() {
//   const { id } = useParams(); // Destructure the id parameter from useParams
//   const [task, setTask] = useState(null);

//   useEffect(() => {
//     fetchTaskDetails(id); // Pass the id directly here
//   }, [id]); // Ensure to depend on id

//   const fetchTaskDetails = (id) => {
//     // Mocked fetch logic for demo
//     setTask({
//       id: id,
//       title: "Task " + id,
//       description: `This is task ${id}`,
//       status: "Pending",
//     });
//   };

//   if (!task) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <h2>{task.title}</h2>
//       <p>{task.description}</p>
//       <p>Status: {task.status}</p>
//       {/* Add additional task details and functionality */}
//     </div>
//   );
// }

// export default TaskDetail;

// Tasks/TaskDetail.jsx
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';

// const TaskDetail = () => {
//   const { id } = useParams();  // Using 'id' as the parameter from the URL
//   const [task, setTask] = useState(null);
//   const [comments, setComments] = useState([]);
//   const [newComment, setNewComment] = useState('');

//   useEffect(() => {
//     const fetchTaskDetails = async () => {
//       try {
//         const authToken = localStorage.getItem('authToken');
//         const response = await axios.get(`/api/tasks/${id}`, {  // Fetching task details with the proper endpoint
//           headers: {
//             Authorization: `Bearer ${authToken}`,
//           },
//         });
//         setTask(response.data);
//         setComments(response.data.comments);
//       } catch (error) {
//         console.error('Error fetching task details:', error);
//         // Display an error message to the user
//         alert('Failed to fetch task details. Please try again later.');
//       }
//     };

//     fetchTaskDetails();
//   }, [id]);

//   const handleAddComment = async () => {
//     try {
//       const authToken = localStorage.getItem('authToken');
//       const response = await axios.post(
//         `/api/tasks/${id}/comments`,  // Adding comment to the proper endpoint
//         { content: newComment },
//         {
//           headers: {
//             Authorization: `Bearer ${authToken}`,
//           },
//         }
//       );
//       setComments([...comments, response.data]);
//       setNewComment('');
//     } catch (error) {
//       console.error('Error adding comment:', error);
//       // Display an error message to the user
//       alert('Failed to add comment. Please try again later.');
//     }
//   };

//   if (!task) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <h2>{task.title}</h2>
//       <p>{task.description}</p>
//       <p>Status: {task.status}</p>
//       <p>Due Date: {task.dueDate}</p>
//       <p>Assigned To: {task.assignedTo}</p>
//       <p>Priority: {task.priority}</p>
//       <h3>Comments</h3>
//       <ul>
//         {comments.map((comment) => (
//           <li key={comment.id}>{comment.content}</li>
//         ))}
//       </ul>
//       <input
//         type="text"
//         placeholder="Add a comment"
//         value={newComment}
//         onChange={(e) => setNewComment(e.target.value)}
//       />
//       <button onClick={handleAddComment}>Add Comment</button>
//     </div>
//   );
// };

// export default TaskDetail;  // Exporting the combined component

// Tasks/TaskDetail.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function TaskDetail() {
  const { id } = useParams(); // Assume "id" is used in route like /tasks/:id
  const [task, setTask] = useState(null);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  useEffect(() => {
    const fetchTaskDetails = async () => {
      try {
        const authToken = localStorage.getItem('authToken');
        const response = await axios.get(`/api/tasks/${id}`, {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        });
        setTask(response.data);
        setComments(response.data.comments);
      } catch (error) {
        console.error('Error fetching task details:', error);
        alert('Failed to fetch task details. Please try again later.');
      }
    };

    fetchTaskDetails();
  }, [id]);

  const handleAddComment = async () => {
    try {
      const authToken = localStorage.getItem('authToken');
      const response = await axios.post(
        `/api/tasks/${id}/comments`,
        { content: newComment },
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      );
      setComments([...comments, response.data]);
      setNewComment('');
    } catch (error) {
      console.error('Error adding comment:', error);
      alert('Failed to add comment. Please try again later.');
    }
  };

  if (!task) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{task.title}</h2>
      <p>{task.description}</p>
      <p>Status: {task.status}</p>
      <p>Due Date: {task.dueDate}</p>
      <p>Assigned To: {task.assignedTo}</p>
      <p>Priority: {task.priority}</p>

      <h3>Comments</h3>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>{comment.content}</li>
        ))}
      </ul>

      <input
        type="text"
        placeholder="Add a comment"
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
      />
      <button onClick={handleAddComment}>Add Comment</button>
    </div>
  );
}

export default TaskDetail;
