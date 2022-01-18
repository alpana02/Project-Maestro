import React, { useContext, useState } from "react";
import sessionContext from "../context/notes/noteContext";

export const AddSession = (props) => {
  const context = useContext(sessionContext);
  const { addSession } = context;
  const [session, setsession] = useState({ title: "", description: "", tag: "" });

  const handleClick = (e) => {
    e.preventDefault();
    addSession(session.title, session.description, session.tag);
    setsession({ title: "", description: "", tag: "" })
    props.showAlert("Session Added Succesfully","success")
  };
  const onChange = (e) => {
    setsession({ ...session, [e.target.name]: e.target.value });
  };

  return (
    <div className="container my-3">
      <h1>Add a Session</h1>
      <form onSubmit={handleClick}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"  
            value={session.title}
            onChange={onChange}
            minLength={3}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            id="description"
            name="description" 
            value={session.description}
            onChange={onChange}
            minLength={5}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="tag" className="form-label">
            Tags
          </label>
          <input
            type="text"
            className="form-control"
            id="tag"
            name="tag" 
            value={session.tag}
            onChange={onChange}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
        >
          Add Session
        </button>
      </form>
    </div>
  );
};

