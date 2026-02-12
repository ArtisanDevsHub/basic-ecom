import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
// In your JSX:

function Home() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/message", {
        withCredentials: true, // required if you use cookies/sessions
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
      <a href="/addCategory" className="text-white ms-4  bg-black p-2  ">
        Add Category
      </a>
      <Link to="/categories" className="text-gray-100 bg-black p-2 ms-3  hover:text-red-500">
        Categories
      </Link>
    </div>
  );
}

export default Home;
