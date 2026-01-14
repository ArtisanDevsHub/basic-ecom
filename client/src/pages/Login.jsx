import React from "react";
import logo from '../assets/Logo.png'
import  { useState } from "react";


const Login = () => {
  const [loginInfo,setLoginInfo] = useState({
    email:"",
    password:""
  })

   const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/api/user/login", loginInfo);

      if (response.data.success) {
        alert("Login Successful!");
        localStorage.setItem("token", response.data.token);
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.log(error);
      alert("Something went wrong");
    }
  };

  

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="w-full max-w-md text-center">
        
        {/* Logo */}
        <div className="flex justify-start mb-4">
          <img 
            src={logo} 
            alt="logo"
            className="h-12"
          />
        </div>

        {/* Title */}
        <h2 className="text-xl flex justify-start font-semibold text-gray-800 mb-6">
          Login into Logoipsum
        </h2>
        <hr className = "bg-gray-300"/>

        {/* Form */}
        <form className="space-y-4 "  onSubmit={handleSubmit}>

          {/* Email */}
          <div className="text-left">
            <label className="text-sm text-gray-700">Email address</label>
            <input
              type="email"
              placeholder="enter your password"
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-300"
              value={loginInfo.email}
              onChange={(e) => setLoginInfo({...loginInfo, email: e.target.value})}
            />
          </div>

          {/* Password */}
          <div className="text-left">
            <label className="text-sm text-gray-700">Password</label>
            <input
              type="password"
              placeholder="***********"
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-300"
            value={loginInfo.password}
              onChange={(e) => setLoginInfo({ ...loginInfo, password: e.target.value })}
            />
          </div>

          {/* Checkbox */}
          <div className="flex items-center text-left">
            <input type="checkbox" className="mr-2" />
            <p className="text-sm">I accept the Terms or Conditions</p>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="flex justify-start px-2 bg-red-500 text-white py-2 rounded hover:bg-red-600 transition"
          >
            SIGN IN
          </button>

        </form>
      </div>
    </div>
  );
};

export default Login;
