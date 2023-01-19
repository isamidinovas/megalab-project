import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const PrivatRoute = () => {
  const userToken = useSelector((state) => state.profile.userToken);
  return userToken ? <Outlet /> : <Navigate to="/registration" />;
};

export default PrivatRoute;
