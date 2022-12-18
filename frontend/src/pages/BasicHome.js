import React from "react";
import Navbar from "../component/Navbar";

import truck_4k from "../assets/truck_4k.jpg";
// mui imports
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import "./MainHome.css";
import { Typography } from "@mui/material";
function BasicHome() {
  return (
    <div>
      <Navbar />

      <Grid container>
        <Grid item lg={12}>
          <img className="truck_4k" src={truck_4k} alt="t`ruck"></img>
          <Box
            sx={{
              mt: { lg: -42, xs: -20, md: -38 },
              ml: { lg: 20, xs: 5, md: 15 },
            }}
          >
            <Typography
              variant="h2"
              color="white"
              sx={{ fontSize: { lg: 60, xs: 20, sm: 35, md: 45 } }}
            >
              <span style={{ backgroundColor: "#e00029", padding: 5 }}>
                Service
              </span>{" "}
              You
              <br /> can Trust
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}

export default BasicHome;
