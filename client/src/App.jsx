import React from 'react'
import Login from './pages/Login'
import {Routes,Route} from "react-router-dom"
import "./App.css";
import Home from "./home/Home";
import UserSignup from "./user-signup/UserSignup";

const App = () => {
  return (
    
      <Routes>
        <Route path="/" element={<Home />} />
		<Route path="/" element={<Login/>}/>
        <Route path="/signup" element={<UserSignup />} />
      </Routes>
    
  )
}

export default App