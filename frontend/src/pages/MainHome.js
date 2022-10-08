import React from "react";
import Navbar from "../component/Navbar";

import truck from "../assets/truck.jpg";
import truck_2 from "../assets/1truck_2.jpg";
import iTruck from "../assets/iTruck.jpg";
import truckArt from "../assets/artTruck.jpg";
import employeeArt from "../assets/employee.webp";
import pricingArt from "../assets/pricing.webp";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import CardContent from "@mui/material/CardContent";
import { Typography } from "@mui/material";
import { fontSize } from "@mui/system";

function MainHome() {
  return (
    <div>
      <Navbar />
      <Box>
        <img src={truck} alt="truck" style={{ width: "100%", height: 400 }} />
        <Typography
          variant="h4"
          sx={{
            mt: -40,
            ml: {
              lg: 10,
              sm: 5,
            },
            pl: 5,
            wordWrap: "break-word",
            color: "white",
          }}
        >
          Service You
          <br /> can Trust
        </Typography>
      </Box>
      <Typography
        sx={{
          pl: 5,
          width: 350,
          color: "white",
          ml: {
            lg: 10,
            sm: 5,
          },
        }}
      >
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      </Typography>
      <Box
        sx={{
          mt: {
            lg: 20,
            xs: 14,
          },
          justifyContent: "space-between",
          backgroundColor: "gray",
          display: {
            lg: "flex",
            xs: "block",
          },
        }}
      >
        <Box>
          <Typography
            variant="h4"
            sx={{
              p: 2,
              ml: {
                lg: 10,
                xs: 5,
              },
            }}
          >
            Our Commitment
          </Typography>
          <Typography
            sx={{
              pl: 2,
              width: {
                lg: 500,
                xs: 350,
              },
              ml: {
                lg: 10,
              },
              wordWrap: {
                xs: "breakWord",
              },
            }}
          >
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum."
          </Typography>
        </Box>
        <Box>
          <img src={truck_2} alt="truck" />
        </Box>
      </Box>
      <Box
        sx={{
          display: {
            lg: "flex",
            xs: "block",
          },
          justifyContent: {
            lg: "space-evenly",
            xs: "none",
          },
        }}
      >
        <Box
          sx={{
            backgroundColor: "red",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              p: 2,
              ml: {
                lg: 10,
                xs: 5,
              },
            }}
          >
            Keys To Success
          </Typography>
          <Typography
            sx={{
              width: {
                lg: 500,
                xs: 350,
              },
              p: 2,
              ml: {
                lg: 10,
              },
            }}
          >
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum."
          </Typography>
        </Box>
        <Box
          sx={{
            backgroundColor: "gray",
            width: {
              lg: 800,
              xs: 380,
            },
          }}
        >
          <Typography
            variant="h4"
            sx={{
              p: 2,
              ml: {
                lg: 10,
                xs: 5,
              },
            }}
          >
            Comprehensive Services
          </Typography>

          <Typography
            sx={{
              ml: {
                lg: 10,
                xs: 5,
              },
            }}
          >
            Lorem dolor sit emet
          </Typography>
          <hr />
          <Typography
            sx={{
              ml: {
                lg: 10,
                xs: 5,
              },
            }}
          >
            Lorem dolor sit emet
          </Typography>
          <hr />
          <Typography
            sx={{
              ml: {
                lg: 10,
                xs: 5,
              },
            }}
          >
            Lorem dolor sit emet
          </Typography>
          <hr />
          <Typography
            sx={{
              ml: {
                lg: 10,
                xs: 5,
              },
            }}
          >
            Lorem dolor sit emet
          </Typography>
          <hr />
        </Box>
      </Box>
      <Box
        sx={{
          display: {
            lg: "flex",
            xs: "block",
          },
          justifyContent: {
            lg: "space-between",
            xs: "none",
          },

          backgroundColor: "green",
        }}
      >
        <Box>
          <Typography
            variant="h5"
            sx={{
              ml: {
                lg: 10,
                xs: 10,
              },
              pl: 5,
              pt: 2,
            }}
          >
            Why Us?
          </Typography>
          <Typography sx={{ pt: 2, pb: 2, pl: { xs: 2 } }}>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum."
          </Typography>
        </Box>
        <Box>
          <Typography
            variant="h5"
            sx={{
              ml: {
                lg: 10,
                xs: 10,
              },
              pl: 5,
              pt: 2,
            }}
          >
            Who are We?
          </Typography>
          <Typography sx={{ pt: 2, pb: 2, pl: { xs: 2 } }}>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum."
          </Typography>
        </Box>
        <Box>
          <Typography
            variant="h5"
            sx={{
              ml: {
                lg: 10,
                xs: 10,
              },
              pl: 5,
              pt: 2,
            }}
          >
            What we Do?
          </Typography>
          <Typography sx={{ pt: 2, pb: 2, pl: { xs: 2 } }}>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum."
          </Typography>
        </Box>
      </Box>
      <Box sx={{ backgroundColor: "whitesmoke" }}>
        <Typography variant="h4" sx={{ textAlign: "center", mb: 5, pt: 5 }}>
          Our Advantages
        </Typography>
        <Box sx={{ ml: { lg: 50, xs: 10 } }}>
          <Grid>
            <Grid item lg={6}>
              <Box
                sx={{
                  pb: 2,
                  display: { lg: "flex", xs: "block" },
                }}
              >
                <img
                  src={truckArt}
                  alt="truckart"
                  style={{ width: 150, height: 150 }}
                />
                <Typography
                  variant="h6"
                  sx={{
                    mt: { lg: 5, xs: 1 },
                    pl: 2,
                    fontSize: { lg: 20, xs: 12 },
                    mr: {
                      lg: 50,
                      xs: 8,
                    },
                  }}
                >
                  <Typography variant="h5" sx={{ pb: 1 }}>
                    Shipping Services
                  </Typography>
                  <Typography>
                    We provide Full Truck load transportation services with
                    varied type of trucks available with the click of a button.
                  </Typography>
                </Typography>
              </Box>
              <Box sx={{ pb: 2, display: { lg: "flex", xs: "block" } }}>
                <img
                  src={employeeArt}
                  alt="truckart"
                  style={{ width: 150, height: 150 }}
                />
                <Typography
                  variant="h6"
                  sx={{
                    mt: { lg: 5, xs: 1 },
                    pl: 2,
                    fontSize: { lg: 20, xs: 12 },
                    mr: {
                      lg: 50,
                      xs: 8,
                    },
                  }}
                >
                  <Typography variant="h5" sx={{ pb: 1 }}>
                    Shipping Services
                  </Typography>
                  <Typography>
                    We provide Full Truck load transportation services with
                    varied type of trucks available with the click of a button.
                  </Typography>
                </Typography>
              </Box>
              <Box sx={{ display: { lg: "flex", xs: "block" } }}>
                <img
                  src={pricingArt}
                  alt="truckart"
                  style={{ width: 150, height: 150 }}
                />
                <Typography
                  variant="h6"
                  sx={{
                    mt: { lg: 5, xs: 1 },
                    pl: 2,
                    fontSize: { lg: 20, xs: 12 },
                    mr: {
                      lg: 50,
                      xs: 8,
                    },
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{
                      pb: 1,
                    }}
                  >
                    Shipping Services
                  </Typography>
                  <Typography>
                    We provide Full Truck load transportation services with
                    varied type of trucks available with the click of a button.
                  </Typography>
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </div>
  );
}

export default MainHome;
