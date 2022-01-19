import React from "react";
import { useNavigate } from "react-router-dom";

export default function Sessionitem(props) {
  let { session } = props;
  let navigate = useNavigate();
  async function enrolledSession(title,description,date,time,creator,link){
    try {
      const response = await fetch(
          `http://localhost:5000/api/sessions/enrollsession`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "auth-token": localStorage.getItem("token"),
            },
            body: JSON.stringify({ title,description,date,time,creator,link }),
          }
        );
        await response.json();
        props.showAlert(
          "Session Enrolled Succesfully",
          "success"
        );
        navigate("/aboutmentee");
        
    } catch (error) {
      return error;
    }
}

  return (
    <div className="col-md-3">
      <div className="card my-3">
        <div className="card-body">
          <div className="d-flex align-items-center">
            <h5 className="card-title">{session.title}</h5>
          </div>
          <p className="card-text">{session.title}</p>
          <p className="card-text">{session.creator}</p>
          <p className="card-text">{session.subject}</p>
          <p className="card-text">{session.topic}</p>
          <p className="card-text">{session.classenrolled}</p>
          <p className="card-text">{session.date}</p>
          <p className="card-text">{session.time}</p>
          <p className="card-text">{session.description}</p>
          <button className="btn btn-primary" onClick= {()=>{
            enrolledSession(session.title,session.description,session.date,session.time,session.creator,session.link)
          }} >Enroll in session</button>
        </div>
      </div>
    </div>
  );
}
