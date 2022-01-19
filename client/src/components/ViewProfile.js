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

  // calendar
  // const events = [
  //   {
  //     title: "Big Meeting",
  //     allDay: true,
  //     start: new Date(2022, 0, 18,10,11,0),
  //     end: new Date(2022, 0, 18,11,12,0),
  //   },
  //   {
  //     title: "Vacation",
  //     start: new Date(2022, 0, 10),
  //     end: new Date(2022, 0, 10),
  //   },
  //   {
  //     title: "Conference",
  //     start: new Date(2022, 0, 20),
  //     end: new Date(2022, 0, 23),
  //   },
  // ];
  // const events = [{}];

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
      const event = await response.json({ title, start, end, createdBy });
      // setAllEvents([...allEvents, event]);
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
          <div className="col-md-3 border-right">
            <div className="d-flex flex-column align-items-center text-center p-4 py-5">
              <img
                className="rounded-circle mt-5"
                width="150px"
                src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
                alt="This is"
              />
              <span className="font-weight-bold">{profile.name}</span>
              <span className="text-black-50">{profile.email}</span>
              <span> </span>
            </div>
          </div>
          <div className="col-md-5 border-right">
            <div className="p-3 py-5">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h4 className="text-right">Mentor Details</h4>
              </div>
              <div className="row mt-3">
                <div className="col-md-12">
                  <label className="labels" style={{ fontSize: "20px" }}>
                    Name:
                  </label>
                  <p className="d-inline">{profile.name}</p>
                </div>
                <div className="col-md-12">
                  <label className="labels" style={{ fontSize: "20px" }}>
                    Email:
                  </label>
                  <p className="d-inline">{profile.email}</p>
                </div>
                <div className="col-md-12">
                  <label className="labels" style={{ fontSize: "20px" }}>
                    Class Specification:
                  </label>
                  <p className="d-inline">{profile.classsp}</p>
                </div>
                <div className="col-md-12">
                  <label className="labels" style={{ fontSize: "20px" }}>
                    Subject Specification:
                  </label>
                  <p className="d-inline">{profile.subject}</p>
                </div>
              </div>
              <div className="col-md-12">
                <label className="labels" style={{ fontSize: "20px" }}>
                  Job:
                </label>
                <p className="d-inline">
                  {profile.work} at {profile.company}
                </p>
              </div>
            </div>
          </div>
          <div className="mt-5 col-md-12">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h4 className="text-right">Appointment scheduler</h4>
            </div>
          </div>
          <div className="col-md-12">
            <div className="container">
              <h4>Add Mentoring Request</h4>
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
  );
}
