import "./App.css";
import Home from "./home/Home";
import UserSignup from "./user-signup/UserSignup";
import { BrowserRouter, Routes, Route } from "react-router-dom";


export default function App() {

  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<UserSignup />} />
      </Routes>
    </BrowserRouter>
  );
}

