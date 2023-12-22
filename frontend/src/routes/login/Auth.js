import React from "react";
import { Outlet } from "react-router-dom";

export const Auth = () => {
  let role = JSON.parse(sessionStorage.getItem("registered"))?.role;
  if (role) return <Outlet />;
  else {
    return <Outlet />;
  }
};
