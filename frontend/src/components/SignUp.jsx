import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Register } from "../API/AuthAPI";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSignup = async () => {
    try {
      const response = await Register(name, email, password);
      if (response) {
        navigate("/url", { state: { token: response } });
        window.location.href = "/url";
      }
    } catch (error) {
      console.error("Signup failed", error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white p-8 rounded shadow-md">
        <h2 className="text-2xl font-bold mb-4">URL Shortener</h2>
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">Sign Up</h3>
          <input
            type="text"
            placeholder="Name"
            className="w-full p-2 mb-2 border"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 mb-2 border"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 mb-4 border"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="bg-blue-500 text-white p-2 rounded"
            onClick={handleSignup}
          >
            Sign Up
          </button>
        </div>
        <p>
          Already have an account?{" "}
          <Link to={"/login"} className="text-blue-500">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Home;
