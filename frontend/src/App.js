import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Signup from "./components/SignUp";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" Component={Signup} />
        <Route exact path="/login" Component={Login} />
        <Route exact path="/url" Component={Dashboard} />
      </Routes>
    </Router>
  );
};

export default App;
