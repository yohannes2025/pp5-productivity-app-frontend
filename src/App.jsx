// App.jsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Change 'Switch' to 'Routes'
import NavBar from "./components/Shared/NavBar";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import ProfilePage from "./components/Profile/ProfilePage";
import TaskList from "./components/Tasks/TaskList";
import CreateTask from "./components/Tasks/CreateTask";
import TaskDetail from "./components/Tasks/TaskDetail";
import styles from "./App.module.css";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
         {/* <Login />
         <Register />
         <ProfilePage />
         <TaskList />
         <CreateTask />
         <TaskDetail />   */}
                 
        {/* <Routes>
          {" "}          
          <Route path="/login" element={<Login />} /> {/* Use element prop
          <Route path="/register" element={<Register />} /> */}
          {/* <Route path="/profile" element={<ProfilePage />} />
          <Route path="/tasks" element={<TaskList />} />{" "} 
          <Route path="/tasks/create" element={<CreateTask />} /> 
          <Route path="/tasks/:id" element={<TaskDetail />} /> 
        </Routes>   */}
      </div>
    </Router>
  );
}

export default App;

// // App.jsx
// import React from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import NavBar from "./components/Shared/NavBar";
// import Login from "./components/Auth/Login";
// import Register from "./components/Auth/Register";
// import ProfilePage from "./components/Profile/ProfilePage";
// import TaskList from "./components/Tasks/TaskList";
// import CreateTask from "./components/Tasks/CreateTask";
// import TaskDetail from "./components/Tasks/TaskDetail";

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <NavBar />
//         {/* <Login />
//         <Register />
//         <ProfilePage />
//         <TaskList />
//         <CreateTask />
//         <TaskDetail /> */}
//         <Switch>
//           <Route path="/login" component={Login} />
//           <Route path="/register" component={Register} />
//           <Route path="/profile" component={ProfilePage} />
//           <Route path="/tasks" exact component={TaskList} />
//           <Route path="/tasks/create" component={CreateTask} />
//           <Route path="/tasks/:id" component={TaskDetail} />
//         </Switch>
//       </div>
//     </Router>
//   );
// }

// export default App;

// App.jsx
// import React from "react";
// import {
//   BrowserRouter as Router,
//   Route,
//   Switch,
//   Routes,
// } from "react-router-dom";
// import NavBar from "./components/Shared/NavBar";
// import Login from "./components/Auth/Login";
// import Register from "./components/Auth/Register";
// import ProfilePage from "./components/Profile/ProfilePage";
// import TaskList from "./components/Tasks/TaskList";
// import CreateTask from "./components/Tasks/CreateTask";
// import TaskDetail from "./components/Tasks/TaskDetail";

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <NavBar />
//         <Routes>
//           <Route path="/login" component={Login} />
//           <Route path="/register" component={Register} />
//           <Route path="/profile" component={ProfilePage} />
//           <Route path="/tasks" exact component={TaskList} />
//           <Route path="/tasks/create" component={CreateTask} />
//           <Route path="/tasks/:id" component={TaskDetail} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useParams } from "react-router-dom";

// const TaskDetailsPage = () => {
//   const { id } = useParams(); // Using 'id' from TaskDetail.jsx
//   const [task, setTask] = useState(null);
//   const [comments, setComments] = useState([]);
//   const [newComment, setNewComment] = useState("");

//   useEffect(() => {
//     const fetchTaskDetails = async () => {
//       try {
//         const authToken = localStorage.getItem("authToken");
//         const response = await axios.get(`/api/tasks/${id}`, {
//           // Using 'id' here
//           headers: {
//             Authorization: `Bearer ${authToken}`,
//           },
//         });
//         setTask(response.data);
//         setComments(response.data.comments);
//       } catch (error) {
//         console.error("Error fetching task details:", error);
//         alert("Failed to fetch task details. Please try again later.");
//       }
//     };

//     fetchTaskDetails();
//   }, [id]); // Using 'id' here

//   const handleAddComment = async () => {
//     try {
//       const authToken = localStorage.getItem("authToken");
//       const response = await axios.post(
//         `/api/tasks/${id}/comments`, // Using 'id' here
//         { content: newComment },
//         {
//           headers: {
//             Authorization: `Bearer ${authToken}`,
//           },
//         }
//       );
//       setComments([...comments, response.data]);
//       setNewComment("");
//     } catch (error) {
//       console.error("Error adding comment:", error);
//       alert("Failed to add comment. Please try again later.");
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

// export default TaskDetailsPage;

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";

// function TaskDetailsPage() {
//   const { id } = useParams();
//   const [task, setTask] = useState(null);
//   const [comments, setComments] = useState([]);
//   const [newComment, setNewComment] = useState("");

//   useEffect(() => {
//     const fetchTaskDetails = async () => {
//       try {
//         const authToken = localStorage.getItem("authToken");
//         const response = await axios.get(`/api/tasks/${id}`, {
//           headers: {
//             Authorization: `Bearer ${authToken}`,
//           },
//         });
//         setTask(response.data);
//         setComments(response.data.comments);
//       } catch (error) {
//         console.error("Error fetching task details:", error);
//         alert("Failed to fetch task details. Please try again later.");
//       }
//     };

//     fetchTaskDetails();
//   }, [id]);

//   const handleAddComment = async () => {
//     try {
//       const authToken = localStorage.getItem("authToken");
//       const response = await axios.post(
//         `/api/tasks/${id}/comments`,
//         { content: newComment },
//         {
//           headers: {
//             Authorization: `Bearer ${authToken}`,
//           },
//         }
//       );
//       setComments([...comments, response.data]);
//       setNewComment("");
//     } catch (error) {
//       console.error("Error adding comment:", error);
//       alert("Failed to add comment. Please try again later.");
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
// }

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/tasks/:id" element={<TaskDetailsPage />} />
//         {/* Add other routes here if needed */}
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;

// import React from "react";
// import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";

// function TestComponent() {
//   const { id } = useParams();
//   return <div>Test ID: {id}</div>;
// }

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/test/:id" element={<TestComponent />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;
