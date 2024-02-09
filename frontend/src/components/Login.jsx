import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { login } from "../API/AuthAPI";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleLogin = async () => {
    try {
      const response = await login(email, password);
      if (response) {
        navigate("/url", { state: { token: response } });
      }
    } catch (error) {
      console.error("Login failed", error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white p-8 rounded shadow-md">
        <h2 className="text-2xl font-bold mb-4">URL Shortener</h2>
        <div>
          <h3 className="text-lg font-semibold mb-2">Login</h3>
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
            onClick={handleLogin}
          >
            Login
          </button>
        </div>
        <p>
          New User?{" "}
          <Link to={"/"} className="text-blue-500">
            SignUp
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
