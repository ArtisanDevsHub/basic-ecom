import "./App.css";
import Home from "./home/Home";
import UserSignup from "./user-signup/UserSignup";
import {  Routes, Route } from "react-router-dom";

export default function App() {
  return (
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<UserSignup />} />
      </Routes>
    
  );
}
