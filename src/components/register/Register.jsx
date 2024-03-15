import React, { useState } from "react";
import "./Register.css";
const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleFormChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    // Mock registration logic
    if (formData.name && formData.email && formData.password) {
      // Simulate API call or database interaction
      console.log("Mock registration successful");
    } else {
      console.log("Please fill in all fields");
    }
  };

  return (
    <div>
      <input
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleFormChange}
      />
      <input
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleFormChange}
      />
      <input
        name="password"
        type="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleFormChange}
      />
      <button onClick={handleSubmit}>Register</button>
    </div>
  );
};

export default Register;
