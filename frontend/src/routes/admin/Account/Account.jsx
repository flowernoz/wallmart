import { Link } from "react-router-dom";
import "./Account.css";
function Account() {
  let name = JSON.parse(localStorage.getItem("registered"))?.firstname;
  return (
    <div>
      <div className="sidebar">
        <div className="side__links">
          <Link to={"/account"}>My account</Link>
          <Link to={"/"}>Home</Link>
        </div>
        <div>
          <p>Hi {name}</p>
          <small>Thanks for being Walmart customer</small>
        </div>
      </div>
      <main></main>
    </div>
  );
}

export default Account;
