import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function ViewProfile(props) {
  const { id } = useParams();
  let navigate = useNavigate();
  const [profile, setProfile] = useState([]);
  const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });
  const [allEvents, setAllEvents] = useState([]);
  const [reviewmessage, setreviewmessage] = useState('');
  const [review, setreview] = useState([]);

  const locales = {
    "en-US": require("date-fns/locale/en-US"),
  };
  const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
  });

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/homepage");
    }
    if (localStorage.getItem("role")==="mentor") {
      navigate("*");
    }
    getUser();
    // eslint-disable-next-line
  }, []);

  // Separate function to get user details
  async function getUser() {
    const response = await fetch(
      `http://localhost:5000/api/auth/getDetails/${id}`,
      {
        method: "GET",
        headers: {
          "auth-token": localStorage.getItem("token"),
        },
      }
    );
    const data = await response.json();
    setProfile(data);
    setreview(data.reviews)


    const response2 = await fetch(
      `http://localhost:5000/api/calendar/fetchallevents/${id}`,
      {
        method: "GET",
        headers: {
          "auth-token": localStorage.getItem("token"),
        },
      }
    );
    const events = await response2.json();
    setAllEvents(events);
  }

  async function handleAddEvent() {
    try {
      const title = newEvent.title;
      const start = newEvent.start;
      const end = newEvent.end;
      const createdBy = localStorage.getItem("email");
      //call api for creating note
      const response = await fetch(
        `http://localhost:5000/api/calendar/addNotification/${id}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "auth-token": localStorage.getItem("token"),
          },
          body: JSON.stringify({ title, start, end, createdBy }),
        }
      );
      await response.json({ title, start, end, createdBy });
      setNewEvent({ title: "", start: "", end: "" });
      props.showAlert(
        "Event Request Has been Sent to the Mentor Succesfully",
        "success"
      );
    } catch (error) {
      return error;
    }
  }
  async function handleSubmit(e){
    e.preventDefault();
try{
  const response = await fetch(
    `http://localhost:5000/api/reviews/addreview/${id}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({ reviewmessage }),
    }
  );
  const res=await response.json();
  console.log(res.reviews);
  setreview(res.reviews)
  setreviewmessage('');
  props.showAlert(
    "Event Request Has been Sent to the Mentor Succesfully",
    "success"
  );
} catch (error) {
  return error;
}
  }
  async function onChange(e){
    setreviewmessage(e.target.value)
  }

  return (
    <div className="container">
      <div className="container rounded bg-white">
        <div className="row">
          <div className="w3-content w3-margin-top" style={{ maxWidth: "1400px" }}>
            <div className="w3-row-padding">
              <div className="w3-third">
                <div className="w3-white w3-text-grey w3-card-4">
                  <div className="w3-display-container">
                    <img
                      src={profile.img}
                      style={{ width: "100%" }}
                      alt="Avatar"
                    />
                  </div>
                </div>
                <br />
              </div>
              <div className="w3-twothird">
                <div className="w3-container w3-card w3-white w3-margin-bottom">
                  <div className="w3-container">
                    <br />
                    <h2 className="w3-text-grey w3-padding-16">
                      <i className="fa fa-certificate fa-fw w3-margin-right w3-xxlarge w3-text-blue"></i>
                      About {profile.name}
                    </h2>
                    <hr />
                    <p>
                      <i className="fa fa-briefcase fa-fw w3-margin-right w3-large w3-text-blue"></i>
                      {profile.work} at {profile.company}
                    </p>
                    <p>
                      <i className="fa fa-cogs fa-fw w3-margin-right w3-large w3-text-blue"></i>
                      Years of experience - {profile.experience}
                    </p>
                    <p>
                      <i className="fa fa-home fa-fw w3-margin-right w3-large w3-text-blue"></i>
                      Bangaluru, India
                    </p>
                    <p>
                      <i className="fa fa-envelope fa-fw w3-margin-right w3-large w3-text-blue"></i>
                      {profile.email}
                    </p>
                    <p>
                      <i className="fa fa-chalkboard fa-fw w3-margin-right w3-large w3-text-blue"></i>
                      Class Specialization - {profile.classsp}
                    </p>
                    <p>
                      <i className="fa fa-book-open fa-fw w3-margin-right w3-large w3-text-blue"></i>
                      Subject Specialization - {profile.subject}
                    </p>
                    <br />
                    <br />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container card border py-4 mb-5">
            <div className="col-md-12">
              <div className="d-flex justify-content-between align-items-center mb-1 mx-5">
                <h3 className="text-right">Appointment scheduler</h3>
              </div>
            </div>
            <div className="col-md-12 ">
              <div className="container mx-5">
                <h5>Add Mentoring Request</h5>
                <input
                  className="mt-2"
                  type="text"
                  placeholder="Add Title"
                  style={{ width: "20%", marginRight: "10px" }}
                  value={newEvent.title}
                  onChange={(e) =>
                    setNewEvent({ ...newEvent, title: e.target.value })
                  }
                />
                <DatePicker
                  className="mt-2"
                  placeholderText="Start Date"
                  style={{ marginRight: "10px" }}
                  selected={newEvent.start}
                  onChange={(start) => setNewEvent({ ...newEvent, start })}
                />
                <DatePicker
                  className="mt-2"
                  placeholderText="End Date"
                  selected={newEvent.end}
                  onChange={(end) => setNewEvent({ ...newEvent, end })}
                />
                <button
                  className="btn btn-primary mt-2"
                  stlye={{ marginTop: "10px" }}
                  onClick={handleAddEvent}
                >
                  Add Event
                </button>
              </div>
              <Calendar
                localizer={localizer}
                events={allEvents}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 500, margin: "50px" }}
              />
            </div>
          </div>
        </div>
      </div>
        <div className="card card-body  mt-n7 mb-5" >
          <div className="row gx-4 mb-2">
            <h3 className="mb-0 text-2xl">
              Testimonial Section
            </h3>
            <section style={{paddingTop: "10px"}}>
              <div className="container my-3">
                <div className="row">
                  {review.map((rev)=>(
                    <div className="col-lg-3 col-md-8 pt-3">
                    <div className="card  text-white bg-gradient-primary" style={{backgroundColor:'#231f38' }}>
                      <div className="card-body" style={{backgroundColor:'#28223f'}}>
                        <h4 className="mt-0 text-white">{rev.review}</h4>
                        <div className="author align-items-center mt-2">
                          <div className="name">
                            <p style={{marginBottom: "0" ,color: "rgb(206, 205, 205)"}}> {rev.fromName}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  ))}
                  <div className="col-lg-3 mb-lg-0 mb-4 me-auto my-3">
                <div className="card h-100">
                  <div className="card-body d-flex flex-column justify-content-center text-center">
                   
                      <i className="fa fa-plus text-secondary mb-3"></i>
                      <h5 className="text-secondary"> Add Testimonial </h5>
                      <form  onSubmit={handleSubmit}>
                        <div className="input-group input-group-outline my-3">
                          <input type="text" className="form-control" placeholder="Type a review" name="reviewmessage" value={reviewmessage} onChange={onChange} required />
                        </div>
                        <div className="d-flex align-items-center justify-content-between mt-1" >
                          <button type="submit" className="btn btn-primary btn-sm mb-0" >Add Review</button>
                        </div>
                      </form>
                   
                  </div>
                </div>
              </div>
                </div>
              </div>
            </section>
          </div>
        </div>
    </div>
  );
}
