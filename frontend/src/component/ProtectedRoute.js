import React, { useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";

export const ProtectedRoute = ({ role, ...props }) => {
  const navigate = useNavigate();
  const getRole = localStorage.getItem("role");

  // If authorized, return an outlet that will render child elements
  // If not, return element that will navigate to forbidden page

  useEffect(() => {
    role !== getRole && navigate("/forbidden", { replace: true });
  }, []);

  return <Outlet />;
  // navigate("/forbidden", { replace: true })
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
