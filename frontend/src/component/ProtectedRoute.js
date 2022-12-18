import React, { useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";

export const ProtectedRoute = ({ role, ...props }) => {
  const navigate = useNavigate();
  const getRole = localStorage.getItem("role");

  // If authorized, return an outlet that will render child elements
  // If not, return element that will navigate to forbidden page

  useEffect(() => {
    role !== getRole && navigate("/forbidden", { replace: true });
    // eslint-disable-next-line
  }, []);

  return <Outlet />;
};

export default ProtectedRoute;
