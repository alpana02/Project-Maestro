import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export const SignupMentee = (props) => {
  let navigate = useNavigate();
  const [credentials, setcredentials] = useState({
    name: "",
    email: "",
    password: "",
    classsp: "",
    role: "mentee",
    interest: "",
    work: "",
    company: "",
    experience: "",
    img:"",
  });

  const onChange = (e) => {
    setcredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: credentials.name,
        email: credentials.email,
        password: credentials.password,
        role: credentials.role,
        classsp: credentials.classsp,
      }),
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      // save tha uth and redirect
      localStorage.setItem("token", json.authToken);
      navigate("/");
      props.showAlert('Account Created Succesfully', 'success')
    } else {
      props.showAlert('Invalid Details', 'danger')
    }
  };
  return (
    <div>
      <section className="h-100 gradient-form">
        <div className="h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-xl-10">
              <div className="card rounded-3 text-black">
                <div className="row g-0">
                  <div className="col-lg-6">
                    <div className="card-body p-md-5 mx-md-4">

                      <form onSubmit={handleSubmit}>
                        <h2>Create an account</h2>

                        <div className="form-outline mb-4">
                          <label htmlFor="name" className="form-label">
                            Name
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            name="name"
                            id="name"
                            value={credentials.name}
                            onChange={onChange}
                            minLength={3}
                            required
                          />
                        </div>

                        <div className="form-outline mb-4">
                          <label htmlFor="email" className="form-label">
                            Email address
                          </label>
                          <input
                            type="email"
                            className="form-control"
                            id="email"
                            name="email"
                            onChange={onChange}
                            value={credentials.email}
                            aria-describedby="emailHelp"
                            required
                          />
                        </div>

                        <div className="form-outline mb-4">
                          <label htmlFor="password" className="form-label">
                            Password
                          </label>
                          <input
                            type="password"
                            className="form-control"
                            name="password"
                            id="password"
                            value={credentials.password}
                            onChange={onChange}
                            minLength={5}
                            required
                          />
                        </div>
                        <div className="form-outline mb-4">
                          <label htmlFor="classsp" className="form-label">
                            Class
                          </label>
                          <input
                            type="number"
                            className="form-control"
                            name="classsp"
                            id="classsp"
                            value={credentials.classsp}
                            onChange={onChange}
                          />
                        </div>
                        <div className="text-center mb-3 pb-1">
                          <button type="submit" className="btn btn-primary">
                            Submit
                          </button>

                        </div>

                        <div className="d-flex align-items-center justify-content-center pb-4">
                          <p className="mb-0 me-2">Already have an account?</p>
                          <Link type="button" className="btn btn-outline-danger" to="/login" role="button">
                            Login
                          </Link>
                        </div>

                      </form>

                    </div>
                  </div>
                  <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
                    <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                      <h4 className="mb-4">We are more than just a company</h4>
                      <p className="small mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};