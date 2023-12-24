import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

export const Auth = () => {
  const navigate = useNavigate();
  let role = JSON.parse(localStorage.getItem("registered"))?.role;
  if (role == "admin") return <Outlet />;
  else {
    return navigate("/account");
  }
};
