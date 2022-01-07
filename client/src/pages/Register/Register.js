import React, { useState } from "react";
import "./Register.css"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const Register = () => {

    const navigate = useNavigate()
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        reEnterpassword: ""

    })

    const handlechange = e => {

        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value

        })

    }

    const registerfunc = () => {
        const { name, email, password, reEnterpassword } = user

        if (name && email && password && (password === reEnterpassword)) {
            axios.post("http://localhost:9002/register", user)
                .then(res => console.log(res))
        }
        else {
            alert("invalid input")
        }

    }
    return (
        <div className="register" >
            {console.log("User", user)}
            <h1 >Register</h1>
            <input type="text" name="name" value={user.name} placeholder="Your Name" onChange={handlechange}></input >
            <input type="text" name="email" value={user.email} placeholder="Your Email" onChange={handlechange}></input >
            <input type="text" name="password" value={user.password} placeholder="Your password" onChange={handlechange}></input >
            <input type="text" name="reEnterpassword" value={user.reEnterpassword} placeholder="Confirm your password" onChange={handlechange} ></input >
            <div className="button" onClick={registerfunc}>Register</div>
            <div>Already have an account ?</div>
            <div className="button" onClick={() => navigate('/login')}>Login</div>
        </div>
    )
}
export default Register