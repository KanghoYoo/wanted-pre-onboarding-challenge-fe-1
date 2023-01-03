import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./auth/Login";
import SignUp from "./auth/SignUp";
import Todo from "./todo/Todo";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate replace to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/Todo" element={<Todo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
