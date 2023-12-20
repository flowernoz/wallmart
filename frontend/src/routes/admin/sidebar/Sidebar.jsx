import React from "react";
import "./Sidebar.css";
import { Link, useNavigate } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";

function Sidebar() {
  const navigate = useNavigate();

  const LogOut = () => {
    localStorage.removeItem("admin");
    navigate("/");
  };
  console.log(navigate);

  const admin = JSON.parse(localStorage.getItem("admin"));

  return (
    <aside>
      <div className="aside__Logo">
        {/* logo */}
        <div>
          <Link to={"/admin"}>
            Welcome <br /> <span> {admin?.username}</span>{" "}
          </Link>
        </div>
      </div>
      <div className="aside__links">
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
