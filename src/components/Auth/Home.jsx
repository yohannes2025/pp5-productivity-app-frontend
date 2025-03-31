// // Home/Dashboard.jsx

// import React from "react";

// /**
//  * Home/Dashboard component
//  * This component represents the main page of the application, which serves as the landing page or dashboard.
//  * It can display various sections, such as a welcome message, quick links, and data visualizations.
//  */
// const Home = () => {
//   return (
//     <div className="home-container">
//       {/* Welcome section */}
//       <section className="welcome-section">
//         <h1>Welcome to Our Application</h1>
//         <p>
//           This is the main dashboard where you can access various features and
//           functionalities of the application.
//         </p>
//       </section>

//       {/* Quick links section */}
//       <section className="quick-links-section">
//         <h2>Quick Links</h2>
//         <ul>
//           <li>
//             <a href="/profile">View Profile</a>
//           </li>
//           <li>
//             <a href="/settings">Account Settings</a>
//           </li>
//           <li>
//             <a href="/reports">Generate Reports</a>
//           </li>
//         </ul>
//       </section>

//       {/* Data visualization section */}
//       <section className="data-visualization-section">
//         <h2>Key Metrics</h2>
//         {/* Add your data visualization components here */}
//         <div className="chart-container">
//           {/* Example chart component */}
//           <BarChart data={chartData} />
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Home;


// import React, { useState, useEffect } from "react";
// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
// } from "recharts";

// const Home = () => {
//   const [chartData, setChartData] = useState([]);

//   useEffect(() => {
//     // Fetch data for the chart and update the chartData state
//     const fetchChartData = async () => {
//       try {
//         const response = await fetch("/api/chart-data");
//         const data = await response.json();
//         setChartData(data);
//       } catch (error) {
//         console.error("Error fetching chart data:", error);
//       }
//     };

//     fetchChartData();
//   }, []);

//   return (
//     <div>
//       <h1>Home</h1>
//       {chartData.length > 0 && (
//         <BarChart width={600} height={400} data={chartData}>
//           <XAxis dataKey="label" />
//           <YAxis />
//           <CartesianGrid strokeDasharray="3 3" />
//           <Tooltip />
//           <Legend />
//           <Bar dataKey="value" fill="#8884d8" />
//         </BarChart>
//       )}
//     </div>
//   );
// };

// export default Home;

// import React, { useState, useEffect } from "react";
// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
// } from "recharts";

// const Home = () => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     // Fetch data from an API or generate sample data
//     const sampleData = [
//       { name: "Jan", value: 400 },
//       { name: "Feb", value: 300 },
//       { name: "Mar", value: 500 },
//       { name: "Apr", value: 400 },
//       { name: "May", value: 600 },
//       { name: "Jun", value: 500 },
//     ];
//     setData(sampleData);
//   }, []);

//   return (
//     <div>
//       <h1>Welcome to the Productivity App</h1>
//       <LineChart width={600} height={400} data={data}>
//         <XAxis dataKey="name" />
//         <YAxis />
//         <CartesianGrid strokeDasharray="3 3" />
//         <Tooltip />
//         <Legend />
//         <Line type="monotone" dataKey="value" stroke="#8884d8" />
//       </LineChart>
//     </div>
//   );
// };

// export default Home;

// import React, { useState, useEffect } from "react";
// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
//   ResponsiveContainer,
// } from "recharts";

// const Home = () => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     // Fetch data from an API or generate sample data
//     const sampleData = [
//       { name: "Jan", value: 400 },
//       { name: "Feb", value: 300 },
//       { name: "Mar", value: 600 },
//       { name: "Apr", value: 400 },
//       { name: "May", value: 500 },
//       { name: "Jun", value: 700 },
//     ];
//     setData(sampleData);
//   }, []);

//   return (
//     <div>
//       <h1>Productivity Dashboard</h1>
//       <ResponsiveContainer width="100%" height={400}>
//         <LineChart data={data}>
//           <XAxis dataKey="name" />
//           <YAxis />
//           <CartesianGrid strokeDasharray="3 3" />
//           <Tooltip />
//           <Legend />
//           <Line type="monotone" dataKey="value" stroke="#8884d8" />
//         </LineChart>
//       </ResponsiveContainer>
//     </div>
//   );
// };

// export default Home;

// import React from "react";
// import { Link } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";

// function Home() {
//   return (
//     <div>
//       <h1>Welcome to the Productivity App</h1>
//       <p>
//         This app is designed to help you stay organized and on top of your
//         tasks.
//       </p>
//       <div>
//         <Link to="/login">
//           <button>Login</button>
//         </Link>
//         <Link to="/register">
//           <button>Register</button>
//         </Link>
//       </div>
//       <div>
//         <Link to="/createtask">
//           <button>Create Task</button>
//         </Link>
//         <Link to="/tasklist">
//           <button>View Task List</button>
//         </Link>
//       </div>
//     </div>
//   );
// }

// export default Home;

// import React from "react";
// import { Link } from "react-router-dom";
// import { Container, Button, Row, Col, Jumbotron } from "react-bootstrap";

// function Home() {
//   return (
//     <Container className="mt-5">
//       <Jumbotron className="text-center">
//         <h1>Welcome to the Productivity App</h1>
//         <p>
//           This app is designed to help you stay organized and on top of your
//           tasks.
//         </p>
//       </Jumbotron>

//       <Row className="justify-content-center">
//         <Col md={3} className="mb-3">
//           <Link to="/login">
//             <Button variant="primary" block>
//               Login
//             </Button>
//           </Link>
//         </Col>
//         <Col md={3} className="mb-3">
//           <Link to="/register">
//             <Button variant="success" block>
//               Register
//             </Button>
//           </Link>
//         </Col>
//       </Row>

//       <Row className="justify-content-center">
//         <Col md={3} className="mb-3">
//           <Link to="/createtask">
//             <Button variant="info" block>
//               Create Task
//             </Button>
//           </Link>
//         </Col>
//         <Col md={3} className="mb-3">
//           <Link to="/tasklist">
//             <Button variant="warning" block>
//               View Task List
//             </Button>
//           </Link>
//         </Col>
//       </Row>
//     </Container>
//   );
// }

// export default Home;


// import React from "react";
// import { Link } from "react-router-dom";
// import { Container, Button, Row, Col, Jumbotron } from "react-bootstrap";

// function Home() {
//   return (
//     <Container className="mt-5">
//       <Jumbotron className="text-center">
//         <h1>Welcome to the Productivity App</h1>
//         <p>
//           This app is designed to help you stay organized and on top of your
//           tasks.
//         </p>
//       </Jumbotron>

//       {/* Centering the buttons and creating a horizontal layout */}
//       <Row className="justify-content-center mb-3">
//         <Col xs="auto">
//           <Link to="/login">
//             <Button variant="primary" className="mx-2">
//               Login
//             </Button>
//           </Link>
//           <Link to="/register">
//             <Button variant="success" className="mx-2">
//               Register
//             </Button>
//           </Link>
//           <Link to="/createtask">
//             <Button variant="info" className="mx-2">
//               Create Task
//             </Button>
//           </Link>
//           <Link to="/tasklist">
//             <Button variant="warning" className="mx-2">
//               View Task List
//             </Button>
//           </Link>
//         </Col>
//       </Row>
//     </Container>
//   );
// }

// export default Home;

import React from "react";
import { Link } from "react-router-dom";
import { Container, Button, Row, Col, Jumbotron } from "react-bootstrap";

function Home() {
  return (
    <Container className="d-flex flex-column justify-content-center align-items-center min-vh-100">
      <Jumbotron className="text-center">
        <h1>Welcome to the Productivity App</h1>
        <p>
          This app is designed to help you stay organized and on top of your
          tasks.
        </p>
      </Jumbotron>

      {/* Centered buttons in a single line */}
      <Row className="justify-content-center mb-3">
        <Col xs="auto">
          <Link to="/login">
            <Button variant="primary" className="mx-2">
              Login
            </Button>
          </Link>
          <Link to="/register">
            <Button variant="success" className="mx-2">
              Register
            </Button>
          </Link>
          <Link to="/createtask">
            <Button variant="info" className="mx-2">
              Create Task
            </Button>
          </Link>
          <Link to="/tasklist">
            <Button variant="warning" className="mx-2">
              View Task List
            </Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;