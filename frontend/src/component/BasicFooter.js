import * as React from "react";
import { Link } from "react-router-dom";

// mui imports
import Box from "@mui/material/Box";
import { Grid, Typography } from "@mui/material";

function BasicFooter() {
  return (
    <div>
      <Box sx={{ backgroundColor: "#e60023", mt: 5, color: "#e3e3e5" }}>
        <Grid container spacing={4}>
          <Grid item lg={4} xl={4} xs={12}>
            <Typography
              variant="h4"
              sx={{ pb: 1, ml: 2, fontSize: { xl: 35 } }}
            >
              About Our Company
            </Typography>
            <Typography sx={{ p: 2, fontSize: { xl: 20 } }}>
              Kagzi Transports, a leading transport and logistics service
              provider is introducing a truly innovative, modern and high-tech
              online platform to book the truck in a few simple steps.
              <br /> With the apt use of advanced technology and rich industry
              experience, we are delivering customized and economical online
              transportation and cargo solutions to match your expectations and
              exceed industry benchmarks.
            </Typography>

            <Typography variant="h4" sx={{ p: 1, ml: 2, fontSize: { xl: 35 } }}>
              Contact Information
            </Typography>
            <Typography sx={{ p: 2, fontSize: { xl: 20 } }}>
              Phone : 72020 45678
              <br /> WhatsApp : 7202045678
              <br /> Email : info@truckguru.co.in Office
              <br /> Timing: 09:00 AM to 07:00 PM
            </Typography>
          </Grid>
          <Grid item lg={4} xl={4} xs={12}>
            <Typography variant="h4" sx={{ p: 1, ml: 2, fontSize: { xl: 35 } }}>
              Quick Links
            </Typography>

            <ul
              style={{
                textDecoration: "none",
                listStyleType: "none",
                fontSize: 20,
              }}
            >
              <li>
                <Link
                  style={{ textDecoration: "none", color: "#e3e3e5" }}
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  style={{ textDecoration: "none", color: "#e3e3e5" }}
                  to="#"
                >
                  FAQs
                </Link>
              </li>
              <li>
                <Link
                  style={{ textDecoration: "none", color: "#e3e3e5" }}
                  to="#"
                >
                  Terms and Condition
                </Link>
              </li>
              <li>
                <Link
                  style={{ textDecoration: "none", color: "#e3e3e5" }}
                  to="#"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  style={{ textDecoration: "none", color: "#e3e3e5" }}
                  to="#"
                >
                  Partner With us
                </Link>
              </li>
            </ul>
          </Grid>
          <Grid item lg={4} xl={4} xs={12}>
            <Typography variant="h4" sx={{ p: 1, ml: 2, fontSize: { xl: 35 } }}>
              Our Socials
            </Typography>

            <Box sx={{ display: { lg: "block", xs: "flex" } }}>
              <Box sx={{ p: 2, display: "flex" }}>
                <i className="fa-brands fa-instagram fa-2x"></i>
                <Box sx={{ p: 3 }}></Box>
                <i className="fa-brands fa-facebook fa-2x"></i>
              </Box>
              <Box sx={{ p: 2, display: "flex" }}>
                <i className="fa-brands fa-square-twitter fa-2x"></i>
                <Box sx={{ p: 3 }}></Box>
                <i className="fa-brands fa-snapchat fa-2x"></i>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
export default BasicFooter;
