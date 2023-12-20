import React from "react";
import Carts from "./Carts/Carts";
import CreateData from "./CreateData/CreateData";
// import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar/Sidebar";

function Admin() {
  return (
    <div>
      <Sidebar />
      {/* <Outlet /> */}
      <CreateData />
      <Carts />
    </div>
  );
}

export default Admin;
