import './App.css';
import Home from "./pages/Home/Home";
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import background from './images/bg_image.jpg'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react"

function App() {

  const [user, setLoginUser] = useState({})

  return (
    <BrowserRouter>
      <div className="App" style={{ backgroundImage: `url(${background})` }}>
        <Routes>
          <Route exact path="/" element={user && user._id ? <Home /> : <Login setLoginUser={setLoginUser} />} />
          <Route path="/login" element={<Login setLoginUser={setLoginUser} />} />
          <Route path="/register" element={<Register />} />
        </Routes>

      </div>
    </BrowserRouter>

  );
}

export default App;
