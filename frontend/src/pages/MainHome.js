import React from "react";
import Navbar from "../component/Navbar";
import BasicFooter from "../component/BasicFooter";

// for animation
import { motion, useSpring, useViewportScroll } from "framer-motion";

// import { Variants } from "framer-motion";

import "./MainHome.css";

// image imports from assets folder
import truckArt from "../assets/artTruck.jpg";
import employeeArt from "../assets/employee.webp";
import pricingArt from "../assets/pricing.webp";
import truck_image from "../assets/img.jpg";
import truck_image2 from "../assets/img1.webp";

// mui imports
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import { Typography } from "@mui/material";

function MainHome() {
  const { scrollYProgress } = useViewportScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const cardVariants = {
    offScreen: {
      x: 300,
    },
    onScreen: {
      x: 0,
    },
  };

  return (
    <div>
      <motion.div
        initial={{ opacity: 0, scale: 1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div className="progress-bar" style={{ scaleX }} />
        <Navbar />

        <Box sx={{ mt: -6 }}>
          <img
            src={truck_image}
            alt="truck"
            style={{ width: "100%", height: 400 }}
          />
          <Typography
            variant="h3"
            sx={{
              mt: { lg: -35, xs: -28 },
              ml: {
                lg: 10,
                xs: 2,
              },
              fontSize: {
                lg: 60,
                xs: 30,
              },

              pl: 5,
              wordWrap: "break-word",
              color: "white",
            }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
            >
              <span style={{ backgroundColor: "#e60023", padding: 5 }}>
                Service You
              </span>
              <br /> can Trust
            </motion.div>
          </Typography>
        </Box>

        <Box
          sx={{
            mt: {
              lg: 17,
              xs: 18,
            },
            justifyContent: "space-between",

            display: {
              lg: "flex",
              xs: "block",
            },
          }}
        >
          <Box sx={{ backgroundColor: " #e60023", color: "#e3e3e5" }}>
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
                pb: 2,
                ml: {
                  lg: 10,
                },
                wordWrap: {
                  xs: "breakWord",
                },
              }}
            >
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum."
            </Typography>
          </Box>
          <motion.div
            initial={{ x: 50 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Box>
              <img className="truck_img" src={truck_image2} alt="truck" />
            </Box>
          </motion.div>
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
              backgroundColor: "#232325",
              color: "#e3e3e5",
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
                pb: 5,
                ml: {
                  lg: 10,
                },
              }}
            >
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum."
            </Typography>
          </Box>
          <Box
            sx={{
              backgroundColor: "#38383a",
              color: "#e3e3e5",
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

            backgroundColor: "#e1e1e1",
            color: "#0e0e0e",
          }}
        >
          <Box sx={{ mt: { lg: 0.5, xs: -1 } }}>
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
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum."
            </Typography>
          </Box>
          <Box sx={{ mt: { lg: 0.5, xs: -1 } }}>
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
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum."
            </Typography>
          </Box>
          <Box sx={{ mt: { lg: 0.5, xs: -1 } }}>
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
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum."
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
                <motion.div
                  initial="offscreen"
                  whileInView="onscreen"
                  veiwport={{ once: true, amount: 0.8 }}
                >
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
                    <Box
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
                        varied type of trucks available with the click of a
                        button.
                      </Typography>
                    </Box>
                  </Box>
                </motion.div>
                <Box sx={{ pb: 2, display: { lg: "flex", xs: "block" } }}>
                  <img
                    src={employeeArt}
                    alt="truckart"
                    style={{ width: 150, height: 150 }}
                  />
                  <Box
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
                      varied type of trucks available with the click of a
                      button.
                    </Typography>
                  </Box>
                </Box>
                <Box sx={{ display: { lg: "flex", xs: "block" } }}>
                  <img
                    src={pricingArt}
                    alt="truckart"
                    style={{ width: 150, height: 150 }}
                  />
                  <Box
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
                      varied type of trucks available with the click of a
                      button.
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <BasicFooter />
      </motion.div>
    </div>
  );
}

export default MainHome;
