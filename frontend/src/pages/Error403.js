import React from "react";
import { Link, NavLink } from "react-router-dom";

import error_403 from "../assets/403_error.png";

// mui imports
import Box from "@mui/material/Box";

function Error403() {
  return (
    <div>
      <img
        src={error_403}
        alt="error_truck"
        style={{ width: "100%", height: "100%" }}
      />
      <Box sx={{ mt: -20, ml: 70 }}>
        <Link to="/mainhome">Go to Home</Link>
      </Box>
    </div>
  );
}

export default Error403;
