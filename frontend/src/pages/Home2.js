import React from "react";

import "./Home2.css";
import iTruck from "../assets/iTruck.jpg";
import truckArt from "../assets/artTruck.jpg";
import employeeArt from "../assets/employee.webp";
import pricingArt from "../assets/pricing.webp";
import truck_2 from "../assets/1truck_2.jpg";

import Box from "@mui/material/Box";
import truck from "../assets/truck.jpg";
import { Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
// import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
// import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import BasicFooter from "../component/BasicFooter";
import Paper from "@mui/material/Paper";

function Home2() {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  return (
    <div>
      <Navbar />
      {/* grid  */}
      {/* <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={6} md={8} lg={12}>
            <Item>
              <img src={truck} alt="truck" />
            </Item>
 
          </Grid>
          <Grid item xs={6} md={4}>
            <Item>xs=6 md=4</Item>
          </Grid>
          <Grid item xs={6} md={4}>
            <Item>xs=6 md=4</Item>
          </Grid>
          <Grid item xs={6} md={8}>
            <Item>xs=6 md=8</Item>
          </Grid>
        </Grid>
      </Box> */}

      <Box sx={{ mt: -6 }}>
        <img src={truck} alt="truck" />
        <Typography
          variant="h4"
          sx={{
            mt: -40,
            ml: {
              lg: 30,
              sm: 20,
            },
            color: "white",
            fontSize: {
              lg: 60,
              sm: 30,
            },
            pl: {
              sm: 2,
            },
          }}
        >
          The Service
          <br /> You can trust
        </Typography>
        <Typography
          sx={{
            ml: {
              lg: 30,
              sm: 20,
            },
            color: "white",
            fontSize: {
              sm: 12,
            },
          }}
        >
          "Lorem ipsum dolor sit amet, consectetur adipiscing
          <br /> sed do eiusmod tempor incididunt ut labore et dolo
          <br /> Ut enim ad minim veniam, quis nostrud exercitation
        </Typography>
      </Box>
      <Box display="flex">
        <Box className="abdul_box" sx={{ mt: 11, backgroundColor: "gray" }}>
          <Box sx={{ ml: 10 }}>
            <Typography variant="h4" sx={{ ml: 4, color: "black", pt: 5 }}>
              Our Commitment
            </Typography>
            <Typography
              sx={{
                p: 2,
                wordWrap: {
                  xs: "break-word",
                },
                width: {
                  xs: 10,
                },
              }}
            >
              "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaq quae ab
              illo inventore veritatis et quasi architecto beatae vitae dicta
              sunt explicabo. Nemo enim ipsam voluptatem quia volup aspernatur
              aut odit aut fugit, sed quia consequuntur magni dol eos qui
              ratione voluptatem sequi nesciunt. Neque porro quisqu, qui dolorem
              ipsum quia dolor sit amet, consectetur, adipisci vel, sed quia non
              numquam eius modi tempora incidunt ut labore et magnam aliquam
              quaerat voluptatem. Ut enim ad minima venia nostrum exercitatione
            </Typography>
          </Box>
        </Box>
        <Box>
          <img className="red_truck" src={iTruck} alt="itruck" />
        </Box>
      </Box>
      <Box sx={{ backgroundColor: "yellowgreen" }} display="flex">
        <Box sx={{ ml: 10, width: "auto" }}>
          <Typography variant="h4" sx={{ ml: 4, color: "black", pt: 5 }}>
            Keys
            <br />
            To Success
          </Typography>
          <Typography sx={{ p: 3 }}>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            <br />
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            <br />
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            <br />
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            <br />
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            <br />
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            <br />
            culpa qui officia deserunt mollit anim id est laborum."
            <br />
          </Typography>
        </Box>
        <Box sx={{ ml: 15, width: "auto" }}>
          <Typography variant="h4" sx={{ color: "black", pt: 5 }}>
            Comprehensive
            <br />
            Services
          </Typography>
          <Typography sx={{ pb: 3, pt: 3 }}>
            Lorem Ipsum doler sit amet ""
          </Typography>
          <Typography sx={{ pb: 3 }}>Lorem Ipsum doler sit amet ""</Typography>
          <Typography sx={{ pb: 3 }}>Lorem Ipsum doler sit amet ""</Typography>
          <Typography sx={{ pb: 6 }}>Lorem Ipsum doler sit amet ""</Typography>
        </Box>
      </Box>

      <Box sx={{ backgroundColor: "gray" }}>
        <Grid container spacing={3} sx={{ width: 1000, ml: 20 }}>
          <Grid item lg={4} xs={12}>
            <CardContent>
              <Typography variant="h5" component="div" sx={{ pb: 2 }}>
                Why <br />
                Us?
              </Typography>

              <Typography variant="body2" sx={{ fontSize: 12 }}>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum."
                <br />
              </Typography>
            </CardContent>
          </Grid>
          <Grid item lg={4}>
            <CardContent>
              <Typography variant="h5" component="div" sx={{ pb: 2 }}>
                Who <br />
                We Are
              </Typography>

              <Typography variant="body2" sx={{ fontSize: 12 }}>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum."
                <br />
              </Typography>
            </CardContent>
          </Grid>
          <Grid item lg={4}>
            <CardContent>
              <Typography variant="h5" component="div" sx={{ pb: 2 }}>
                What
                <br />
                We Do
              </Typography>

              <Typography variant="body2" sx={{ fontSize: 12 }}>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum."
              </Typography>
            </CardContent>
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ backgroundColor: "whitesmoke" }}>
        <Typography variant="h4" sx={{ textAlign: "center", mb: 5, pt: 5 }}>
          Our Advantages
        </Typography>
        <Box sx={{ ml: 5 }}>
          <Grid container>
            <Grid item lg={6}>
              <Box sx={{ pb: 2, display: { lg: "flex", xs: "block" } }}>
                <img
                  src={truckArt}
                  alt="truckart"
                  style={{ width: 150, height: 150 }}
                />
                <Typography sx={{ mt: 5, pl: 2 }}>
                  Shipping Services <br /> We provide Full Truck load
                  transportation services with varied <br />
                  type of trucks available with the click of a button.
                </Typography>
              </Box>
              <Box sx={{ pb: 2, display: { lg: "flex", xs: "block" } }}>
                <img
                  src={employeeArt}
                  alt="truckart"
                  style={{ width: 150, height: 150 }}
                />
                <Typography sx={{ mt: 5, pl: 2 }}>
                  Shipping Services <br /> We provide Full Truck load
                  transportation services with varied <br />
                  type of trucks available with the click of a button.
                </Typography>
              </Box>
              <Box sx={{ display: { lg: "flex", xs: "block" } }}>
                <img
                  src={pricingArt}
                  alt="truckart"
                  style={{ width: 150, height: 150 }}
                />
                <Typography sx={{ mt: 5, pl: 2 }}>
                  Shipping Services <br /> We provide Full Truck load
                  transportation services with varied <br />
                  type of trucks available with the click of a button.
                </Typography>
              </Box>
            </Grid>
            <Grid item lg={6}>
              <img src={truck_2} alt="truck" style={{ height: 500 }} />
            </Grid>
          </Grid>
        </Box>
      </Box>
      <BasicFooter />
    </div>
  );
}

export default Home2;
