import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";

export default function App() {

  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchNote = async () => {
      try {
        const res = await axios.get("http://localhost:3000/api/message", {
          withCredentials: true, // required if you use cookies/sessions
        });
        setMessage(res.data.text);
      } catch (err) {
        console.error("Error loading data:", err);
      }
    };
    fetchNote();
  }, []);

  return (
    <div>
      <h1>{message}</h1>
    </div>
  );
}
