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
                  <p><i class="fa fa-home fa-fw w3-margin-right w3-large w3-text-blue"></i>Bangaluru, India</p>
                  <p><i class="fa fa-envelope fa-fw w3-margin-right w3-large w3-text-blue"></i>{profile.email}</p>
                  <p><i class="fa fa-chalkboard fa-fw w3-margin-right w3-large w3-text-blue"></i>Class Specialization - {profile.classsp}</p>
                </div>
              </div>
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


