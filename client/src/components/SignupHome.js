import { Link } from "react-router-dom";
import './About.css'

export default function SignupHome() {
    return <div>
        <Link className="btn btn-primary mx-1" to="/signup" role="button">
            Mentor
        </Link>
        <Link className="btn btn-primary mx-1" to="/signupmentee" role="button">
            Mentee
        </Link>
    </div>;
}