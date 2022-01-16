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
    };


    return (
        <div>

            <div>

                <div className='conatiner mt-5'>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light my-5">
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
                    <div class="col-12 mt-3">
                        <div class="row">
                            {usercards.map((usercards, index) => (
                                <div class="col-xl-3 col-md-6 mb-xl-5 mb-7 mb-sm-6 mb-md-6 mb-lg-6 d-flex">
                                    <div class="card" style={{ width: "18rem" }}>
                                        <img width='500' height='200' src={`data:image/png;base64,${usercards.img.data}`} class="card-img-top" alt={usercards.name} />
                                        <div class="card-body">
                                            <h5 class="card-title">{usercards.name}</h5>
                                            <p class="card-text" style={{ fontSize: "14px", marginBottom: "0.3rem" }}><b>{usercards.work}</b> at {usercards.company}</p>
                                            <p class="card-text" style={{ fontSize: "14px", marginBottom: "0.3rem" }}><b>Class Specialization :</b> {usercards.classsp}</p>
                                            <p class="card-text" style={{ fontSize: "14px" }}><b>Years of experience : </b> {usercards.experience}</p>
                                            <a href="#" class="btn btn-primary">View Profile</a>
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
