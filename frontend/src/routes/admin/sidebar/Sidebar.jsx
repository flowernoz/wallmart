import React from "react";
import "./Sidebar.css";
import { Link, useNavigate } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";

function Sidebar() {
  const navigate = useNavigate();
  let name = JSON.parse(localStorage.getItem("registered"))?.firstname;
  const LogOut = () => {
    localStorage.removeItem("registered");
    navigate("/");
  };

  const admin = JSON.parse(localStorage.getItem("admin"));

  return (
    <aside>
      <div className="aside__Logo">
        {/* logo */}
        <div className="welcome">
          <Link to={"/admin"}>
            Welcome <br /> <span> {admin?.username}</span>{" "}
          </Link>
          <p>{name}</p>
        </div>
      </div>
      <div className="aside__links">
        <Link to={"/"}>Home</Link>
        <Link to={"/admin/create"}>Create</Link>
        <Link to={"/admin/alldata"}>Alldata</Link>
      </div>
      <div className="aside__LogOut" onClick={LogOut}>
        Log out <FiLogOut />{" "}
      </div>
      <div className="admin_header"></div>
    </aside>
  );
}

export default Sidebar;
