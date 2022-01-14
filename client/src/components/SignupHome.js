import { Link } from "react-router-dom";
import './SignupHome.css'

export default function SignupHome() {
    return <div>
        <div class="container" style={{ margin: "50px" }}>
            <div class="body d-md-flex align-items-center justify-content-between">
                <div class="box-1 mt-md-0 mt-5"> <img src="https://images.pexels.com/photos/2033997/pexels-photo-2033997.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" class="" alt="" /> </div>
                <div class=" box-2 d-flex flex-column h-100 text-center">

  <div class="card-body">
  <div className="d-flex align-items-center justify-content-center py-5 my-4">
                        <p className="mb-0 me-2">Are you Mentor/ Mentee - </p><br/>
                        <div>
                        <Link className="btn btn-outline-danger mx-3 mt-3" to="/signup" role="button">
                            Mentor
                        </Link>
                        <Link className="btn btn-outline-danger mt-3" to="/signupmentee" role="button">
                            Mentee
                        </Link>
                        </div>
                        
                    </div>
                    <div className="d-flex align-items-center justify-content-center pb-4">
                        <p className="mb-0 me-2">Already have an account?</p>
                        <Link type="button" className="btn btn-outline-danger" to="/login" role="button">
                            Login
                        </Link>

  </div>
</div>
                </div>
            </div>
        </div>
    </div>;
}