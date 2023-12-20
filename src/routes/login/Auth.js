import React from "react";
import { Outlet, Navigate } from "react-router-dom";

export const Auth = () => {
  let userInfo = JSON.parse(sessionStorage.getItem("userInfo"));
  let auth =
    userInfo?.username === "gulnoza" && userInfo?.password === "tursunova";
  if (auth) return <Outlet />;
  else {
    return <Navigate to={"/login"} />;
  }
};
