import React from "react";
import { Link, NavLink } from "react-router-dom";

import error_truck from "../assets/error_truck.webp";

import Box from "@mui/material/Box";
function Error() {
  return (
    <div>
      <img src={error_truck} alt="error_truck" />
      <Box sx={{ mt: -20, ml: 70 }}>
        <Link to="/mainhome">Go to Home</Link>
      </Box>
    </div>
  );
}

export default Error;
