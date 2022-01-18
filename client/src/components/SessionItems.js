import React, { useContext } from "react";
import sessionContext from "../context/notes/noteContext";

export default function Sessionitem(props) {
  const context = useContext(sessionContext);
  const { deleteSession } = context;
  let { session, updateSession } = props;
  return (
    <div className="col-md-3">
      <div className="card my-3">
        <div className="card-body">
          <div className="d-flex align-items-center">
            <h5 className="card-title">{session.title}</h5>
            <i
              className="far fa-trash-alt mx-2"
              onClick={() => {
                deleteSession(session._id);
                props.showAlert("Deleted Succesfully", "success");
              }}
              type="button"
            ></i>
            <i
              className="far fa-edit mx-2"
              onClick={() => {
                updateSession(session);
              }}
              type="button"
            ></i>
          </div>
          <p className="card-text">{session.title}</p>
          <p className="card-text">{session.creator}</p>
          <p className="card-text">{session.subject}</p>
          <p className="card-text">{session.topic}</p>
          <p className="card-text">{session.classenrolled}</p>
          <p className="card-text">{session.date}</p>
          <p className="card-text">{session.time}</p>
          <p className="card-text">{session.description}</p>
          <p className="card-text">{session.link}</p>
        </div>
      </div>
    </div>
  );
}
