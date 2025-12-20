import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

function Home() {


  const [message, setMessage] = useState("");

  useEffect(() => {
    axios.get("http://localhost:3000/api/message", {
      withCredentials: true,   // required if you use cookies/sessions
    })
    .then((res) => {
      setMessage(res.data.text);
    })
    .catch((err) => {
      console.log("Error:", err);
    });
  }, []);
  return (
    <div className="p-6">
      <p className="text-2xl font-bold mb-4">{message} </p>
      
      <a href="/signup" className="text-white  bg-black p-2  ">
        Signup
      </a>
    </div>
  );
}

export default Home;
