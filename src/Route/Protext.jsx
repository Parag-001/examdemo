import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const Protected = ({ children }) => {
  const location = useLocation();
  const data = localStorage.getItem("Login");
  if (!JSON.parse(data)) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
};

export default Protected;
