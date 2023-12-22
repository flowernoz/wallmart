import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import logo from "../../assets/logo.png";
import axios from "axios";
function Login() {
  const navigate = useNavigate();
  function LOGIN(e) {
    e.preventDefault();
    let formData = new FormData(e.target);
    let value = Object.fromEntries(formData);
    let email = value.email;
    localStorage.setItem("email", JSON.stringify(value));
    axios
      .get(`http://localhost:5500/user/search?email=${email}`)
      .then((res) => {
        if (res.data.success == true) {
          return (
            console.log(res.data.innerData),
            localStorage.setItem(
              "registered",
              JSON.stringify(res.data.innerData)
            ),
            navigate("/")
          );
        } else {
          return navigate("/register");
        }
      })
      .catch((res) => console.log(res));
  }

  return (
    <div className="Signin">
      <Link to={"/"}>
        <img src={logo} alt="home" />
      </Link>
      <h3>Sign in or create your account</h3>
      <p>
        Not sure if you have an account? <br /> Enter your email and we’ll check
        for you.
      </p>

      <form className="signinForm" onSubmit={LOGIN}>
        <label>Email Address</label>
        <input
          name="email"
          autoComplete="disable"
          autoFocus
          required
          type="email"
        />
        <button className="submit" type="submit">
          Continue
        </button>
      </form>
      <span>
        Securing your personal information is our priority.
        <Link to={"/"}>See our privacy measures.</Link>
      </span>
    </div>
  );
}

export default Login;
