import React, { useEffect, useState, useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Sessionitem from "./SessionItems";
import sessionContext from "../context/notes/noteContext";
import "./Home.css";

export default function Home(props) {
  let navigate = useNavigate();
  const [usercards, setusercards] = useState([]);
  const [totalcards, settotalcards] = useState([])
  const [filterCard, setFilter] = useState({ class: "", subject: "" });

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
    }
    getSessions();
    getAllUsers();
    // eslint-disable-next-line
  }, []);
  async function getAllUsers() {
    const response = await fetch(`http://localhost:5000/api/auth/getAllusers`, {
      method: "GET",
      headers: {
        "auth-token": localStorage.getItem("token"),
      },
    });
    const data = await response.json();
    setusercards(data);
    settotalcards(data)
  }

  const context = useContext(sessionContext);
  const { sessions, getSessions, editSession } = context;
  const [session, setsession] = useState({
    _id: "",
    title: "",
    description: "",
    tag: "",
  });
 
  const updateSession = (currentSession) => {
    ref.current.click();
    setsession(currentSession);
  };
  const ref = useRef(null);

  async function handleSubmit(e) {
    e.preventDefault();
    const res = totalcards.filter(
      (card) =>{
        return card.classsp === filterCard.class &&  card.subject === filterCard.subject && card.role === "mentor"
      }
    );
    setusercards(res);
  }
  const onChange = (e) => {
    setFilter({ ...filterCard, [e.target.name]: e.target.value });
  };

  return (
    <div>
    <div className="col-12 mt-3">
            <div className="row">
            {sessions.map((session) => {
          return (
            <Sessionitem
              key={session._id}
              updateSession={updateSession}
              session={session}
              showAlert={props.showAlert}
            />
          );
        })}
        </div></div>
      <form onSubmit={handleSubmit}>
        <div className="conatiner mt-5">
          <div className="container">
            <div className="row">
              <h4>Filter</h4>
              <div className="col-3">
                <select
                  className="form-select"
                  name="class"
                  onChange={onChange}
                  aria-label="Default select example"
                >
                  <option selected>Select Class</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </select>
              </div>
              <div className="col-3">
                <select
                  className="form-select"
                  name="subject"
                  onChange={onChange}
                  aria-label="Default select example"
                >
                  <option selected>Select Subject</option>
                  <option value="math">Math</option>
                  <option value="science">Science</option>
                  <option value="english">English</option>
                </select>
              </div>
              <div className="col-3">
                <button type="submit" class="btn btn-primary">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>

      <div>
        {
          <div className="col-12 mt-3">
            <div className="row">
              {usercards.map((usercards, index) => (
                
                <div className="col-xl-3 col-md-6 mb-xl-5 mb-7 mb-sm-6 mb-md-6 mb-lg-6 d-flex">
                  {console.log(usercards.img.data)}
                  <div className="card" style={{ width: "18rem" }}>
                    <img
                      width="500"
                      height="200"
                      src="https://picsum.photos/seed/picsum/200/300"
                      className="card-img-top"
                      alt={usercards.name}
                    />
                    <div className="card-body">
                      <h5 className="card-title">{usercards.name}</h5>
                      <p
                        className="card-text"
                        style={{ fontSize: "14px", marginBottom: "0.3rem" }}
                      >
                        <b>{usercards.work}</b> at {usercards.company}
                      </p>
                      <p
                        className="card-text"
                        style={{ fontSize: "14px", marginBottom: "0.3rem" }}
                      >
                        <b>Class Specialization :</b> {usercards.classsp}
                      </p>
                      <p className="card-text" style={{ fontSize: "14px", marginBottom: "0.3rem"  }}>
                        <b>Subject Specialization : </b> {usercards.subject}
                      </p>
                      <p className="card-text" style={{ fontSize: "14px" }}>
                        <b>Years of experience : </b> {usercards.experience}
                      </p>

                      <a href="/" className="btn btn-primary">
                        View Profile
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        }
      </div>
    </div>
  );
}
