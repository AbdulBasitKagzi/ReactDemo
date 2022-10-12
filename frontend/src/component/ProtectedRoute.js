import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoute = ({ role, ...props }) => {
  const getRole = localStorage.getItem("role");
  console.log("role", role);

  // If authorized, return an outlet that will render child elements
  // If not, return element that will navigate to forbidden page
  return role === getRole ? <Outlet /> : <Navigate to="/forbidden" />;
};
//   path,
//   element: Component,
//   render,
//   requiredRole,
//   ...rest
// }) => {
//   const role = localStorage.getItem("role");
//   console.log(role);
//   return (
//     <Route
//       path={path}
//       {...rest}
//       render={(props) => {
//         if (role === requiredRole) {
//           return Component ? <Component {...props} /> : render(props);
//         } else {
//           return <Navigate to="*" />;
//         }
//       }}
//     />
//   );

export default ProtectedRoute;
