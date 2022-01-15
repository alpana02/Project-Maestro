import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import './Home.css'

export default function Home(props) {
    let navigate = useNavigate();
    const [usercards, setusercards] = useState([])
    useEffect(() => {
        if (!localStorage.getItem("token")) {
            navigate("/login");

        }
        getAllUsers()
    }, []);

    async function getAllUsers() {
        const response = await fetch(`http://localhost:5000/api/auth/getAllusers`, {
            method: "GET",
            headers: {
                "auth-token": localStorage.getItem("token"),
            },

        })
        const data = await response.json();
        setusercards(data);
        console.log(data)
    };


    return (
        <div>

            <div>

                <div className='conatiner mt-5'>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <div className="container-fluid">
                            <a className="navbar-brand" href="/">Choose Class</a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                                <ul className="navbar-nav">
                                    <li className="nav-item dropdown mx-2">
                                        <a className="nav-link dropdown-toggle" href="/" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Class 1
                                        </a>
                                        <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                            <li><a className="dropdown-item" href="/">Math</a></li>
                                            <li><a className="dropdown-item" href="/">Science</a></li>
                                            <li><a className="dropdown-item" href="/">English</a></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item dropdown mx-2">
                                        <a className="nav-link dropdown-toggle" href="/" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Class 2
                                        </a>
                                        <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                            <li><a className="dropdown-item" href="/">Math</a></li>
                                            <li><a className="dropdown-item" href="/">Science</a></li>
                                            <li><a className="dropdown-item" href="/">English</a></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item dropdown mx-2">
                                        <a className="nav-link dropdown-toggle" href="/" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Class 3
                                        </a>
                                        <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                            <li><a className="dropdown-item" href="/">Math</a></li>
                                            <li><a className="dropdown-item" href="/">Science</a></li>
                                            <li><a className="dropdown-item" href="/">English</a></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item dropdown mx-2">
                                        <a className="nav-link dropdown-toggle" href="/" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Class 4
                                        </a>
                                        <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                            <li><a className="dropdown-item" href="/">Math</a></li>
                                            <li><a className="dropdown-item" href="/">Science</a></li>
                                            <li><a className="dropdown-item" href="/">English</a></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item dropdown mx-2">
                                        <a className="nav-link dropdown-toggle" href="/" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Class 5
                                        </a>
                                        <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                            <li><a className="dropdown-item" href="/">Math</a></li>
                                            <li><a className="dropdown-item" href="/">Science</a></li>
                                            <li><a className="dropdown-item" href="/">English</a></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item dropdown mx-2">
                                        <a className="nav-link dropdown-toggle" href="/" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Class 6
                                        </a>
                                        <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                            <li><a className="dropdown-item" href="/">Math</a></li>
                                            <li><a className="dropdown-item" href="/">Science</a></li>
                                            <li><a className="dropdown-item" href="/">English</a></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item dropdown mx-2">
                                        <a className="nav-link dropdown-toggle" href="/" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Class 7
                                        </a>
                                        <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                            <li><a className="dropdown-item" href="/">Math</a></li>
                                            <li><a className="dropdown-item" href="/">Science</a></li>
                                            <li><a className="dropdown-item" href="/">English</a></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item dropdown mx-2">
                                        <a className="nav-link dropdown-toggle" href="/" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Class 8
                                        </a>
                                        <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                            <li><a className="dropdown-item" href="/">Math</a></li>
                                            <li><a className="dropdown-item" href="/">Science</a></li>
                                            <li><a className="dropdown-item" href="/">English</a></li>
                                        </ul>
                                    </li><li className="nav-item dropdown mx-2">
                                        <a className="nav-link dropdown-toggle" href="/" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Class 9
                                        </a>
                                        <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                            <li><a className="dropdown-item" href="/">Math</a></li>
                                            <li><a className="dropdown-item" href="/">Science</a></li>
                                            <li><a className="dropdown-item" href="/">English</a></li>
                                        </ul>
                                    </li><li className="nav-item dropdown mx-2">
                                        <a className="nav-link dropdown-toggle" href="/" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Class 10
                                        </a>
                                        <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                            <li><a className="dropdown-item" href="/">Math</a></li>
                                            <li><a className="dropdown-item" href="/">Science</a></li>
                                            <li><a className="dropdown-item" href="/">English</a></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item dropdown mx-1.5">
                                        <a className="nav-link dropdown-toggle" href="/" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Class 11
                                        </a>
                                        <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                            <li><a className="dropdown-item" href="/">Math</a></li>
                                            <li><a className="dropdown-item" href="/">Science</a></li>
                                            <li><a className="dropdown-item" href="/">English</a></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item dropdown mx-3">
                                        <a className="nav-link dropdown-toggle" href="/" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Class 12
                                        </a>
                                        <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                            <li><a className="dropdown-item" href="/">Math</a></li>
                                            <li><a className="dropdown-item" href="/">Science</a></li>
                                            <li><a className="dropdown-item" href="/">English</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
            <div>
                {
                    usercards.map((usercards, index) => (

                        <div className="card">
                            <div className="container">
                                <h4> <b>{usercards.name}</b></h4>
                                <p>Role: {usercards.role}</p>
                                <div>Email: {usercards.email}</div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}
