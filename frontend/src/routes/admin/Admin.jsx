import React from "react";
import Carts from "./Carts/Carts";
import CreateData from "./CreateData/CreateData";
import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar/Sidebar";
import "./Admin.css";
function Admin() {
  return (
    <div className="Admin">
      <Sidebar />
      <Outlet />
    </div>
  );
}

export default Admin;
