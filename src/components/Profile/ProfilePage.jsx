import React, { useState, useEffect } from "react";
import axios from "axios";

const ProfilePage = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const authToken = localStorage.getItem("authToken");
        const response = await axios.get("/api/profile", {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        });
        setUser(response.data);
      } catch (error) {
        console.error("Error fetching user profile:", error);
        // Display an error message to the user
        alert("Failed to fetch user profile. Please try again later.");
      }
    };

    fetchUserProfile();
  }, []);

  const handleUpdateProfile = async () => {
    try {
      const authToken = localStorage.getItem("authToken");
      await axios.put("/api/profile", user, {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });
      // Display a success message to the user
      alert("Profile updated successfully!");
    } catch (error) {
      console.error("Error updating user profile:", error);
      // Display an error message to the user
      alert("Failed to update profile. Please try again later.");
    }
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Profile</h2>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <button onClick={handleUpdateProfile}>Update Profile</button>
    </div>
  );
};

export default ProfilePage;
