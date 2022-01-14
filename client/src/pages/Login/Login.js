import React, { useState } from "react";
import "./Login.css"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const Login = ({ setLoginUser }) => {
    const navigate = useNavigate();

    const [user, setUser] = useState({
        email: "",
        password: "",

    })

    const handlechange = e => {

        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value

        })
    }

    const loginfunc = () => {
        axios.post("http://localhost:9002/login", user)
            .then(res => {
                alert(res.data.message)
                setLoginUser(res.data.user)
                navigate("/")
            })
    }


    return (
        <div className="login" >
            <h1 >Login</h1>
            <input type="text" name="email" value={user.email} onChange={handlechange} placeholder="Enter your Email" ></input >
            <input type="text" name="password" value={user.password} onChange={handlechange} placeholder="Enter your password" ></input >
            <div className="button" onClick={loginfunc}>Login</div>
            <div>or</div>
            <div className="button" onClick={() => navigate('/register')}>Register</div>
        </div>
    )
}
export default Login