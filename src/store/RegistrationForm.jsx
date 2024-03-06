import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { registerUserAsync } from "./userSlice";
import '../index.css'

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    dob: "",
    phone: ""
  });
  const [error, setError] = useState(""); 

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      
      setError("Passwords do not match.");
      return;
    }

   
    dispatch(registerUserAsync(formData));
    setError(""); 
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8">
      <div className="grid grid-cols-1 gap-4">
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          placeholder="First Name"
          className="rounded-md border-gray-300 focus:border-blue-500 focus:ring-blue-500 focus:outline-none px-4 py-2"
        />
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          placeholder="Last Name"
          className="rounded-md border-gray-300 focus:border-blue-500 focus:ring-blue-500 focus:outline-none px-4 py-2"
        />
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          placeholder="Username"
          className="rounded-md border-gray-300 focus:border-blue-500 focus:ring-blue-500 focus:outline-none px-4 py-2"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          className="rounded-md border-gray-300 focus:border-blue-500 focus:ring-blue-500 focus:outline-none px-4 py-2"
        />
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
          className="rounded-md border-gray-300 focus:border-blue-500 focus:ring-blue-500 focus:outline-none px-4 py-2"
        />
        <input
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          placeholder="Confirm Password"
          className="rounded-md border-gray-300 focus:border-blue-500 focus:ring-blue-500 focus:outline-none px-4 py-2"
        />
        <input
          type="date"
          name="dob"
          value={formData.dob}
          onChange={handleChange}
          placeholder="Date of Birth"
          className="rounded-md border-gray-300 focus:border-blue-500 focus:ring-blue-500 focus:outline-none px-4 py-2"
        />
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone Number"
          className="rounded-md border-gray-300 focus:border-blue-500 focus:ring-blue-500 focus:outline-none px-4 py-2"
        />
        <button type="submit" className="bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-600">Register</button>
      </div>
    </form>
  );
};

export default RegistrationForm;
