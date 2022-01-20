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
      navigate("/login");
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

  return (
    <div>
      <div className="container rounded bg-white">
        <div className="row">
          <div class="w3-content w3-margin-top" style={{ maxWidth: "1400px" }}>
            <div class="w3-row-padding">
              <div class="w3-third">

                <div class="w3-white w3-text-grey w3-card-4">
                  <div class="w3-display-container">
                    <img src={profile.img} style={{ width: "100%" }} alt="Avatar" />
                  </div>
                </div><br />
              </div>
              <div class="w3-twothird">
                <div class="w3-container w3-card w3-white w3-margin-bottom">
                  <div class="w3-container"><br /><h2 class="w3-text-grey w3-padding-16"><i class="fa fa-certificate fa-fw w3-margin-right w3-xxlarge w3-text-blue"></i>About {profile.name}</h2><hr />
                    <p><i class="fa fa-briefcase fa-fw w3-margin-right w3-large w3-text-blue"></i>{profile.work} at {profile.company}</p>
                    <p><i class="fa fa-cogs fa-fw w3-margin-right w3-large w3-text-blue"></i>Years of experience - {profile.experience}</p>
                    <p><i class="fa fa-home fa-fw w3-margin-right w3-large w3-text-blue"></i>Bangaluru, India</p>
                    <p><i class="fa fa-envelope fa-fw w3-margin-right w3-large w3-text-blue"></i>{profile.email}</p>
                    <p><i class="fa fa-chalkboard fa-fw w3-margin-right w3-large w3-text-blue"></i>Class Specialization - {profile.classsp}</p>
                    <p><i class="fa fa-book-open fa-fw w3-margin-right w3-large w3-text-blue"></i>Subject Specialization - {profile.subject}</p><br /><br />
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
                <h5 >Add Mentoring Request</h5>
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
    </div>
  );
}
