import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { orderAction } from "../store/orderReducer";
import BasicFooter from "../component/BasicFooter";
import Navbar from "../component/Navbar";

import { Typography } from "@mui/material";
import { Box } from "@mui/material";

function EmailPage() {
  const dispatch = useDispatch();
  return (
    <div>
      <Navbar />

      <Box
        sx={{
          textAlign: "center",
          backgroundColor: "whitesmoke",
          height: 400,
          mt: -6,
        }}
      >
        <Typography variant="h2" sx={{ p: 10 }}>
          <span
            style={{ backgroundColor: " #e60023", padding: 4, color: "white" }}
          >
            Your Order
          </span>
          Has been placed
        </Typography>
        <Typography>
          <Link
            style={{ textDecoration: "none" }}
            to="/"
            onClick={() => {
              dispatch(orderAction.clearData());
            }}
          >
            Click OK to continue
          </Link>
        </Typography>
      </Box>

      <BasicFooter />
    </div>
  );
}

export default EmailPage;
