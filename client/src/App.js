import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/mentee/Home";
import About from "./components/mentor/About";
import AboutMentee from "./components/mentee/AboutMentee";
import Discussion from "./components/mentee/Discussion";
import NoteState from "./context/notes/NoteState";
import Alert from "./components/Alert";
import StudentNotes from "./components/mentee/StudentNotes";
import Session from "./components/mentor/Session";
import { Login } from "./components/Login";
import { Signup } from "./components/mentor/Signup";
import { useState } from "react";
import SignupHome from "./components/SignupHome";
import { SignupMentee } from "./components/mentee/SignupMentee";
import DirectMessaging from "./components/DirectMessaging";
import ViewProfile from "./components/mentee/ViewProfile";
import NotificationMentor from "./components/mentor/NotificationMentor";
import Books from "./components/mentee/Books";
import { Notfound } from "./components/Notfound";

function App() {
  const [alert, setAlert] = useState(null);
  const role = localStorage.getItem("role");
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };
  return (
    <>
      <NoteState>
        <Router>
          <Navbar showAlert={showAlert} />
          <Alert alert={alert} />
          <div className="container">
            <Routes>
              <Route
                exact
                path="/"
                element={
                  role === "mentee" ? <Home showAlert={showAlert} /> : <Notfound />
                }
              />
              <Route exact path="/about" element={role === "mentor"?<About />:<Notfound />} />
              <Route exact path="/aboutmentee" element={role === "mentee" ?<AboutMentee />:<Notfound />} />
              <Route exact path="/chat" element={<DirectMessaging />} />
              <Route exact path="/discussion" element={role === "mentee" ?<Discussion />:<Notfound />} />
              <Route
                exact
                path="/student_notes"
                element={role === "mentee" ?<StudentNotes showAlert={showAlert} />:<Notfound />}
              />
              <Route
                exact
                path="/session"
                element={role === "mentor"?<Session showAlert={showAlert} />:<Notfound />}
              />
              <Route
                exact
                path="/login"
                element={<Login showAlert={showAlert} />}
              />
              <Route
                exact
                path="/signuphome"
                element={<SignupHome showAlert={showAlert} />}
              />
              <Route
                exact
                path="/signup"
                element={<Signup showAlert={showAlert} />}
              />
              <Route
                exact
                path="/signupmentee"
                element={<SignupMentee showAlert={showAlert} />}
              />
              <Route
                exact
                path="/viewProfile/:id"
                element={role === "mentee" ?<ViewProfile showAlert={showAlert} />:<Notfound />}
              />
              <Route
                exact
                path="/notify"
                element={role === "mentor"?<NotificationMentor showAlert={showAlert} />:<Notfound />}
              />
              <Route
                exact
                path="/books"
                element={role === "mentee" ?<Books showAlert={showAlert} />:<Notfound />}
              />
            </Routes>
          </div>
        </Router>
      </NoteState>
    </>
  );
}

export default App;
