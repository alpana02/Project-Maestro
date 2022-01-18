import React, { useContext, useState } from "react";
import sessionContext from "../context/notes/noteContext";

export const AddSession = (props) => {
  const context = useContext(sessionContext);
  const { addSession } = context;
  const [session, setsession] = useState({
  creator: "",
  title: "",
  subject: "",
  topic: "",
  classenrolled: "",
  date: "",
  time: "",
  description: "",
  link: "" });

  const handleClick = (e) => {
    e.preventDefault();
    addSession(session.creator,
      session.title,
      session.subject,
      session.topic,
      session.classenrolled,
      session.date,
      session.time,
      session.description,
      session.link);
    setsession({
    creator: "",
    title: "",
    subject: "",
    topic: "",
    classenrolled: "",
    date: "",
    time: "",
    description: "",
    link: "" })
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
                  <label htmlFor="creator" className="form-label">
                    creator
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="creator"
                    name="creator"
                    value={session.creator}
                    onChange={onChange}
                    minLength={3}
                    required
                  />
                </div>
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
                  <label htmlFor="subject" className="form-label">
                    subject
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="subject"
                    name="subject"
                    value={session.subject}
                    onChange={onChange}
                    minLength={5}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="topic" className="form-label">
                    topics
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="topic"
                    name="topic"
                    value={session.topic}
                    onChange={onChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="classenrolled" className="form-label">
                    class
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="classenrolled"
                    name="classenrolled"
                    value={session.classenrolled}
                    onChange={onChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="date" className="form-label">
                    date
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="date"
                    name="date"
                    value={session.date}
                    onChange={onChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="time" className="form-label">
                    time
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="time"
                    name="time"
                    value={session.time}
                    onChange={onChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="description" className="form-label">
                    description
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="description"
                    name="description"
                    value={session.description}
                    onChange={onChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="link" className="form-label">
                    links
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="link"
                    name="link"
                    value={session.link}
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

