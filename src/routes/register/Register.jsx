import React from "react";
import { Link } from "react-router-dom";
import "./Register.css";
import logo from "../../assets/logo.png";
import { useState } from "react";

function Register() {
  const [showpassword, setshowpassword] = useState(false);
  let email = JSON.parse(localStorage.getItem("email"))?.email;
  return (
    <div className="Register">
      <Link to={"/"}>
        <img src={logo} alt="home" />
      </Link>
      <h3>Create your Walmart account</h3>
      <p>
        Email address <br /> {email}
        <Link to={"/login"}>Change</Link>{" "}
      </p>

      <form className="signinForm registerForm">
        <label>First name</label>
        <input name="firstname" autoFocus required type="text" />
        <label>Last name</label>
        <input name="lastname" required type="text" />
        <label>Create a password</label>
        <div className="register_password">
          <input
            name="password"
            required
            type={showpassword ? "text" : "password"}
          />
          <button
            onClick={() => setshowpassword(!showpassword)}
            className="showpassword"
            value="Show"
          >
            {showpassword ? "Hide" : "Show"}
          </button>
        </div>
        <span>
          By clicking Create Account, you acknowledge you have read and agreed
          to our <Link to={"/"}>Terms of Use</Link> and{" "}
          <Link to={"/"}>Privacy Policy</Link>.
        </span>
        <button className="submit" type="submit">
          Continue
        </button>
      </form>
    </div>
  );
}

export default Register;
