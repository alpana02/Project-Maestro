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
    link: ""
  });

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
      link: ""
    })
    props.showAlert("Session Added Succesfully", "success")
  };
  const onChange = (e) => {
    setsession({ ...session, [e.target.name]: e.target.value });
  };

  return (
    <div className="container my-3">
      <div class="container"> <div class=" text-center ">
        <h1>Add a Session</h1>
      </div>
        <div class="row ">
          <div class="col-lg-7 mx-auto">
            <div class="card mt-2 mx-auto p-4 bg-light">
              <div class="card-body bg-light">
                <div class="container">
                  <form id="contact-form" role="form" form onSubmit={handleClick}>
                    <div class="controls">
                      <div class="row">
                        <div class="col-md-6">
                          <div class="form-group"> <label htmlFor="creator">
                            Creator *
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
                            /> </div>
                        </div>
                        <div class="col-md-6">
                          <div class="form-group" style={{ marginBottom: "0px" }}> <label htmlFor="title" >
                            Title *
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
                            /></div>
                        </div>
                        <div class="col-md-6">
                          <div class="form-group mt-3" style={{ marginBottom: "0px" }}> <label htmlFor="subject" >
                            Subject *
                          </label>
                          <select type="text"
                              className="form-control"
                              id="subject"
                              name="subject"
                              value={session.subject}
                              onChange={onChange}
                              required>
                            <option value="" selected disabled>--Select Your Subject--</option>
                            <option>Math</option>
                            <option>Science</option>
                            <option>English</option>
                            <option>Other</option>
                          </select>
                            </div>
                        </div>

                        <div class="col-md-6">
                          <div class="form-group mt-3" style={{ marginBottom: "0px" }}> <label htmlFor="topic" >
                            Topics *
                          </label>
                            <input
                              type="text"
                              className="form-control"
                              id="topic"
                              name="topic"
                              placeholder="Please enter the topics"
                              value={session.topic}
                              onChange={onChange}
                            /></div>
                        </div>
                        <div class="col-md-6">
                          <div class="form-group mt-3" style={{ marginBottom: "0px" }}> <label htmlFor="classenrolled" >
                            Class
                          </label>
                            <input
                              type="number"
                              className="form-control"
                              id="classenrolled"
                              name="classenrolled"
                              value={session.classenrolled}
                              onChange={onChange}
                            /></div>
                        </div>
                        <div class="col-md-6">
                          <div class="form-group mt-3" style={{ marginBottom: "0px" }}> <label htmlFor="date" >
                            Session Date *
                          </label>
                            <input
                              type="date"
                              className="form-control"
                              id="date"
                              name="date"
                              value={session.date}
                              onChange={onChange}
                            /></div>
                        </div>
                        <div class="col-md-6">
                          <div class="form-group mt-3" style={{ marginBottom: "0px" }}> <div className="mb-3">
                            <label htmlFor="time" >
                              Please specify the time *
                            </label>
                            <input
                              type="time"
                              className="form-control"
                              id="time"
                              name="time"
                              value={session.time}
                              onChange={onChange}
                            />
                          </div></div>
                        </div>
                        <div class="col-md-6">
                          <div class="form-group mt-3" style={{ marginBottom: "0px" }}> <label htmlFor="link" >
                            Joining Links *
                          </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Please provide the joining link"
                              id="link"
                              name="link"
                              value={session.link}
                              onChange={onChange}
                            /></div>
                        </div>
                      </div>
                      
                      <div class="row">
                        <div class="col-md-12">
                          <div class="form-group"> <label htmlFor="description" >
                            Description *
                          </label>
                            <input
                              rows="4"
                              type="text"
                              className="form-control"
                              id="description"
                              name="description"
                              value={session.description}
                              onChange={onChange}
                            /> </div>
                        </div>

                      </div>
                    </div>
                    <button
                      type="submit"
                      className="btn btn-primary mt-4"
                    >
                      Add Session
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>



    </div>
  );
};

