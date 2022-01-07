import React from "react";
import "./Home.css"
import { useNavigate } from "react-router-dom"
const Home = () => {
    const navigate = useNavigate();
    return (
        <div className="Home">
            <h1>Homepage</h1>
            <div className="button" onClick={() => navigate('/login')}>Logout</div>
        </div >
    )

}
export default Home