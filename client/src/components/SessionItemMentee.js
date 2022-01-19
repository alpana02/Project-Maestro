import React, { useContext, useState } from "react";

export default function Sessionitem(props) {
  let { session } = props;
  
  async function enrolledSession(sessionid){
    try {
      const response = await fetch(
          `http://localhost:5000/api/sessions/enrollsession`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "auth-token": localStorage.getItem("token"),
            },
            body: JSON.stringify({ sessionid }),
          }
        );
        await response.json({ sessionid });
        props.showAlert(
          "Session Enrolled Succesfully",
          "success"
        );
        
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
            enrolledSession(session._id)
          }} >Enroll in session</button>
        </div>
      </div>
    </div>
  );
}
