import * as React from "react";
import Container from "@mui/material/Container";
import { Link } from "react-router-dom";
// import Link from "@/src/Link";
import Box from "@mui/material/Box";
import { Grid, Typography } from "@mui/material";
import Paper from "@mui/material/Paper";

function BasicFooter() {
  //   const footer = ["AboutUs", "Careers", "Blog", "ContactUs", "Login", "Signup"];
  //   return (
  //     <div style={{ marginTop: "auto" }}>
  //       <Paper
  //         sx={{ marginTop: "auto", bottom: 0 }}
  //         component="footer"
  //         square
  //         variant="outlined"
  //       >
  //         <Container maxWidth="lg">
  //           <Box
  //             sx={{
  //               flexGrow: 1,
  //               justifyContent: "center",
  //               display: "flex",
  //               my: 1,
  //             }}
  //           >
  //             {/* <Link href="/">
  //             <Image priority src="/Logo.svg" width={75} height={30} alt="Logo" />
  //           </Link> */}
  //           </Box>
  //           <Box
  //             sx={{
  //               flexGrow: 1,
  //               display: "flex",
  //               mb: 2,
  //             }}
  //           >
  //             <Typography variant="caption" color="initial">
  //               <ul style={{ display: "flex", fontSize: 25 }}>
  //                 {footer.map((foot, index) => {
  //                   return (
  //                     <li
  //                       key={index}
  //                       style={{ listStyleType: "none", padding: 25 }}
  //                     >
  //                       {foot}
  //                     </li>
  //                   );
  //                 })}
  //               </ul>
  //               <hr />
  //               <div style={{ display: "flex", fontSize: 20 }}>
  //                 <h5> Copyright ©2022. [] Limited </h5>
  //                 <h5 style={{ paddingLeft: 35 }}>Our Socials</h5>
  //                 <div style={{ paddingLeft: 25 }}>
  //                   <i
  //                     style={{ paddingLeft: 25 }}
  //                     class="fa-brands fa-instagram fa-xl"
  //                   ></i>
  //                   <i
  //                     style={{ paddingLeft: 25 }}
  //                     class="fa-brands fa-facebook fa-xl"
  //                   ></i>
  //                   <i
  //                     style={{ paddingLeft: 25 }}
  //                     class="fa-brands fa-twitter fa-xl"
  //                   ></i>
  //                   <i
  //                     style={{ paddingLeft: 25 }}
  //                     class="fa-brands fa-snapchat fa-xl"
  //                   ></i>
  //                 </div>
  //               </div>
  //             </Typography>
  //           </Box>
  //         </Container>
  //       </Paper>
  //     </div>
  //   );
  return (
    <div>
      <Box sx={{ backgroundColor: "gray", mt: 5 }}>
        <Grid container spacing={4}>
          <Grid item lg={4}>
            <Typography variant="h4" sx={{ pb: 2 }}>
              About Our Company
            </Typography>
            <Typography>
              TruckGuru, a leading transport and logistics service provider is
              introducing a truly innovative, modern and high-tech online
              platform to book the truck in a few simple steps.
              <br /> With the apt use of advanced technology and rich industry
              experience, we are delivering customized and economical online
              transportation and cargo solutions to match your expectations and
              exceed industry benchmarks.
            </Typography>

            <Typography varinat="h4" sx={{ p: 2 }}>
              Contact Information
            </Typography>
            <Typography>
              Phone : 72020 45678
              <br /> WhatsApp : 7202045678
              <br /> Email : info@truckguru.co.in Office
              <br /> Timing: 09:00 AM to 07:00 PM
            </Typography>
          </Grid>
          <Grid item lg={4}>
            <Typography variant="h4" sx={{ pb: 2 }}>
              Quick Links
            </Typography>
            <Typography>
              <Link to="/signin">LogIn</Link>
              <Link to="/signup">Signup</Link>
            </Typography>
          </Grid>
          <Grid item lg={4}>
            hello
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
export default BasicFooter;
