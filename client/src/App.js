import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import HomeMentor from "./components/HomeMentor";
import About from "./components/About";
import AboutMentee from "./components/AboutMentee";
//import Chat from "./components/Chat";
import Discussion from "./components/Discussion";
import NoteState from "./context/notes/NoteState";
import Alert from "./components/Alert";
import StudentNotes from "./components/StudentNotes";
import Session from "./components/Session";
import { Login } from "./components/Login";
import { Signup } from "./components/Signup";
import { useState } from "react";
import SignupHome from "./components/SignupHome";
import { SignupMentee } from "./components/SignupMentee";
import DirectMessaging from './components/DirectMessaging';


function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  return (
    <>
      <NoteState>
      <Router>
        <Navbar showAlert={showAlert} />
        <Alert alert={alert} />
        <div className="container">
          <Routes>
            <Route exact path="/" element={<Home showAlert={showAlert} />} />
            <Route exact path="/homementor" element={<HomeMentor showAlert={showAlert} />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/aboutmentee" element={<AboutMentee />} />
            <Route exact path="/chat" element={<DirectMessaging />} />
            <Route exact path="/discussion" element={<Discussion />} />
            <Route exact path="/student_notes" element={<StudentNotes showAlert={showAlert} />} />
            <Route exact path="/session" element={<Session showAlert={showAlert} />} />
            <Route exact path="/login" element={<Login showAlert={showAlert} />} />
            <Route exact path="/signuphome" element={<SignupHome showAlert={showAlert} />} />
            <Route exact path="/signup" element={<Signup showAlert={showAlert} />} />
            <Route exact path="/signupmentee" element={<SignupMentee showAlert={showAlert} />} />
          </Routes>
        </div>
      </Router>
    </NoteState>
    </>
    

  );
}

export default App;
