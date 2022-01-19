import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AboutMentee(props) {
  let navigate = useNavigate();
  const [profile, setProfile] = useState([])
  const [bookings, setBooking] = useState([]);
  const [sessions, setSession] = useState([]);

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
    }
    getUser();
    getEnrolledSession();
    getBooking();
    // eslint-disable-next-line
  }, []);

  // Separate function to get user details

  async function getUser() {
    const response = await fetch(`http://localhost:5000/api/auth/getUser`, {
      method: "GET",
      headers: {
        "auth-token": localStorage.getItem("token"),
      },

    })
    const data = await response.json();
    setProfile(data);
  };
  async function getEnrolledSession() {
    const response = await fetch(
      `http://localhost:5000/api/sessions/fetchmenteeSesion`,
      {
        method: "GET",
        headers: {
          "auth-token": localStorage.getItem("token"),
        },
      }
    );
    const data = await response.json();
    setSession(data);
  }
  async function getBooking() {
    const response = await fetch(
      `http://localhost:5000/api/calendar/fetchmenteeBooking`,
      {
        method: "GET",
        headers: {
          "auth-token": localStorage.getItem("token"),
        },
      }
    );
    const data = await response.json();
    setBooking(data);
  }

  return <div>
    <div className="container rounded bg-white">
      <div className="row">
        <div className="col-md-3 border-right">
          <div className="d-flex flex-column align-items-center text-center p-4 py-5">
            <img className="rounded-circle mt-5" width="150px"
              src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
              alt="This is" /><span className="font-weight-bold">
              {profile.name}</span><span className="text-black-50">{profile.email}</span><span> </span></div>
        </div>
        <div className="col-md-5 border-right">
          <div className="p-3 py-5">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h3 className="text-right">Profile Details</h3>
            </div>
            <div className="row mt-2">
              <div className="col-md-12"><label className="labels">Name</label><p>{profile.name}</p> </div>
            </div>
            <div className="row mt-3">
              <div className="col-md-12"><label className="labels">Email</label><p>{profile.email}</p> </div>
              <div className="col-md-12"><label className="labels">Class</label><p>{profile.classsp}</p> </div>
              <div className="col-md-12"><label className="labels">Role</label><p>{profile.role}</p> </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
    <div className="container">
      {
        <div className="col-12 mt-5">
        <h2>Booked Classes</h2>
          <div className="row">
          <h4 className="mt-3">{bookings.length === 0 && "No Booking Requests Yet"}</h4>  
            {bookings.map((booking, index) => (
              <div className="col-4 mb-xl-5 mb-7 mb-sm-6 mb-md-6 mb-lg-6 d-flex">
                <div className="card" style={{ width: "18rem" }}>
                  <div className="card-body">
                    <h5 className="card-title">{booking.title}</h5>
                    <p
                      className="card-text"
                      style={{ fontSize: "14px", marginBottom: "0.3rem" }}
                    >
                      <b>Start Date :</b> {booking.start.substring(0, 10)}
                    </p>
                    <p
                      className="card-text"
                      style={{ fontSize: "14px", marginBottom: "0.3rem" }}
                    >
                      <b>End Date :</b> {booking.end.substring(0, 10)}
                    </p>
                    <p
                      className="card-text"
                      style={{ fontSize: "14px", marginBottom: "0.3rem" }}
                    >
                      <b>Booking With Mentor :</b> {booking.mentor}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      }
    </div>
    <div className="container">
      {
        <div className="col-12 mt-5">
        <h2>Enrolled Sessions</h2>
          <div className="row">
          <h4 className="mt-3">{sessions.length === 0 && "No Sessions Requests Yet"}</h4>  
            {sessions.map((session) => (
              <div className="col-4 mb-xl-5 mb-7 mb-sm-6 mb-md-6 mb-lg-6 d-flex">
                <div className="card" style={{ width: "18rem" }}>
                  <div className="card-body">
                    <h5 className="card-title">{session.title}</h5>
                    <p
                      className="card-text"
                      style={{ fontSize: "14px", marginBottom: "0.3rem" }}
                    >
                      <b>Session Description :</b> {session.description}
                    </p>
                    <p
                      className="card-text"
                      style={{ fontSize: "14px", marginBottom: "0.3rem" }}
                    >
                      <b>Date :</b> {session.date}
                    </p>
                    <p
                      className="card-text"
                      style={{ fontSize: "14px", marginBottom: "0.3rem" }}
                    >
                      <b>Time :</b> {session.time}
                    </p>
                    <p
                      className="card-text"
                      style={{ fontSize: "14px", marginBottom: "0.3rem" }}
                    >
                      <b>Session By :</b> {session.creator}
                    </p>
                    <p
                      className="card-text"
                      style={{ fontSize: "14px", marginBottom: "0.3rem" }}
                    >
                      <b>Joining Link :</b> <a href={session.link} target="_blank" rel="noreferrer">{session.link}</a>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      }
    </div>
  </div>;
}


