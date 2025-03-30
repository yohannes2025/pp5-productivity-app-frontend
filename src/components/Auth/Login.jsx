// // Auth/Login.jsx
// import React, { useState } from "react";
// import axios from "axios";

// function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleLogin = async () => {
//     try {
//       const response = await axios.post("/api/login", { email, password });
//       // Store the user's token or other relevant data in the app's state or local storage
//       localStorage.setItem("authToken", response.data.token);
//       // Redirect the user to the dashboard or another appropriate page
//       window.location.href = "/dashboard";
//     } catch (error) {
//       console.error("Error logging in:", error);
//       // Display an error message to the user
//       alert("Invalid email or password. Please try again.");
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     handleLogin();
//   };

//   return (
//     <div>
//       <h2>Login</h2>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Email:
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </label>
//         <label>
//           Password:
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </label>
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// }

// export default Login;


// Auth/Login.jsx
import React, { useState } from "react";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // Added error state
  const [loading, setLoading] = useState(false); // Added loading state

  const handleLogin = async () => {
    // Basic validation
    if (!email || !password) {
      setError("Email and password are required.");
      return;
    }

    setLoading(true); // Set loading to true
    try {
      const response = await axios.post("/api/login", { email, password });
      // Store the user's token or other relevant data in the app's state or local storage
      localStorage.setItem("authToken", response.data.token);
      // Redirect the user to the dashboard or another appropriate page
      window.location.href = "/dashboard";
    } catch (error) {
      console.error("Error logging in:", error);
      // Display an error message to the user
      setError("Invalid email or password. Please try again.");
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(""); // Clear previous errors before login
    handleLogin();
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required // Ensure input is required
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required // Ensure input is required
          />
        </label>
        {error && <p style={{ color: 'red' }}>{error}</p>} {/* Displaying error messages */}
        <button type="submit" disabled={loading}>
          {loading ? "Logging in..." : "Login"} {/* Show loading message */}
        </button>
      </form>
    </div>
  );
}

export default Login;