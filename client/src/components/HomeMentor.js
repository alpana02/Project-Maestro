import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
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
    </div>
  );
}
