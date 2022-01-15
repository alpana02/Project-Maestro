import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import './About.css'

export default function About(props) {
  let navigate = useNavigate();
  const [profile, setProfile] = useState([])

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
    }
    getUser();

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
              <h4 className="text-right">Profile Settings</h4>
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
  </div>;
}


