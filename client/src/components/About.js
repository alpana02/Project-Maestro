import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";

export default function About(props) {
  let navigate = useNavigate();
  const [profile, setProfile] = useState([]);
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
    const response = await fetch(`http://localhost:5000/api/auth/getUser`, {
      method: "GET",
      headers: {
        "auth-token": localStorage.getItem("token"),
      },
    });
    const data = await response.json();
    setProfile(data);
    const response2 = await fetch(
      `http://localhost:5000/api/calendar/fetchmyEvents`,
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


  return
  (
  <>
    <div className="container rounded bg-white">
      <div class="container">
        <div class="row">
          <div class="col-sm-5"><img className="mt-5" width="450px" style={{ borderRadius: "25px" }}
            src="./img1.jpeg"
            alt="This is" /></div>
          <div class="col-sm-7" >
            <h5 className="mt-5">Welcome to your profile</h5>
            <h2>{profile.name}</h2>
            <h5
              className="card-text"
              style={{ fontSize: "14px", marginBottom: "0.3rem" }}
            >
              <b>{profile.work}</b> at <b>{profile.company}</b>
            </h5>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-3 border-right">
          <div className="d-flex flex-column align-items-center text-center p-4 py-5">
            <img className="rounded-circle mt-5" width="150px"
              src="./img1.jpeg"
              alt="This is" /><span className="font-weight-bold">
              {profile.name}</span><span className="text-black-50">{profile.email}</span><span> </span>
          </div>
        </div>
        <div className="col-md-5 border-right">
          <div className="p-3 py-5">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h4 className="text-right">Profile Settings</h4>
            </div>
            <div className="row mt-2">
              <div className="col-md-12"><label className="labels">Name</label><p>{profile.name}</p> </div>
            </div>
          </div>
          <div className="col-md-5 border-right">
            <div className="p-3 py-5">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h4 className="text-right">Profile Settings</h4>
              </div>
              <div className="row mt-2">
                <div className="col-md-12">
                  <label className="labels">Name</label>
                  <p>{profile.name}</p>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-md-12">
                  <label className="labels">Email</label>
                  <p>{profile.email}</p>
                </div>
                <div className="col-md-12">
                  <label className="labels">Class</label>
                  <p>{profile.classsp}</p>
                </div>
                <div className="col-md-12">
                  <label className="labels">Role: </label>
                  <p>{profile.role}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
      <div className="d-flex justify-content-between align-items-center mb-3 ml-3">
        <h4 className="text-right">Your Accepted Bookings</h4>
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
    </>
  );
}
