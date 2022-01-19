import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

export default function Home(props) {
  let navigate = useNavigate();
  const [setusercards] = useState([]);
  const [totalcards, settotalcards] = useState([])

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
    }
    getAllUsers();
    // eslint-disable-next-line
  }, []);
  async function getAllUsers() {
    const response = await fetch(`http://localhost:5000/api/auth/getAllusers`, {
      method: "GET",
      headers: {
        "auth-token": localStorage.getItem("token"),
      },
    });
    const data = await response.json();
    setusercards(data);
    settotalcards(data)
  }

 


  return (
    <div>
    
      
    </div>
  );
}
