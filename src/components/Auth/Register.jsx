// // Auth/Register.jsx
// import React, { useState } from "react";
// import axios from "axios";

// function Register() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleRegistration = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post("/api/register", {
//         name,
//         email,
//         password,
//       });
//       // Store the user's token or other relevant data in the app's state or local storage
//       localStorage.setItem("authToken", response.data.token);
//       // Redirect the user to the dashboard or another appropriate page
//       window.location.href = "/dashboard";
//     } catch (error) {
//       console.error("Error registering:", error);
//       // Display an error message to the user
//       alert("Registration failed. Please try again.");
//     }
//   };

//   return (
//     <div>
//       <h2>Register</h2>
//       <form onSubmit={handleRegistration}>
//         <label>
//           Name:
//           <input
//             type="text"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />
//         </label>
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
//         <button type="submit">Register</button>
//       </form>
//     </div>
//   );
// }

// export default Register;


// Auth/Register.jsx
import React, { useState } from "react";
import axios from "axios";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState(""); // State for confirm password
  const [errorMessage, setErrorMessage] = useState(""); // State for error message

  const handleRegistration = async (e) => {
    e.preventDefault();
    
    // Check if passwords match
    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match.");
      return;
    }
    
    try {
      const response = await axios.post("/api/register", {
        name,
        email,
        password,
      });
      // Store the user's token or other relevant data in the app's state or local storage
      localStorage.setItem("authToken", response.data.token);
      // Redirect the user to the dashboard or another appropriate page
      window.location.href = "/dashboard";
    } catch (error) {
      console.error("Error registering:", error);
      // Display an error message to the user
      alert("Registration failed. Please try again.");
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleRegistration}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <label>
          Confirm Password:
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </label>
        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>} {/* Display error message */}
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;