import React, { useEffect, useState, useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Sessionitem from "./SessionItems";
import sessionContext from "../context/notes/noteContext";
import "./Home.css";

export default function Home(props) {
  let navigate = useNavigate();
  const [usercards, setusercards] = useState([]);
  const [totalcards, settotalcards] = useState([])
  const [filterCard, setFilter] = useState({ class: "", subject: "" });

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

  const context = useContext(sessionContext);
  const { sessions, getSessions, editSession } = context;
  const [session, setsession] = useState({
    _id: "",
    title: "",
    description: "",
    tag: "",
  });
 
  const updateSession = (currentSession) => {
    ref.current.click();
    setsession(currentSession);
  };
  const ref = useRef(null);

  async function handleSubmit(e) {
    e.preventDefault();
    const res = totalcards.filter(
      (card) =>{
        return card.classsp === filterCard.class &&  card.subject === filterCard.subject && card.role === "mentor"
      }
    );
    setusercards(res);
  }
  const onChange = (e) => {
    setFilter({ ...filterCard, [e.target.name]: e.target.value });
  };

  return (
    <div>
    
      
    </div>
  );
}
