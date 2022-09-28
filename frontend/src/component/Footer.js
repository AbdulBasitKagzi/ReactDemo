import * as React from "react";
import Container from "@mui/material/Container";

// import Link from "@/src/Link";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

function Footer() {
  const footer = ["AboutUs", "Careers", "Blog", "ContactUs", "Login", "Signup"];
  return (
    <div style={{ marginTop: "auto" }}>
      <Paper
        sx={{ marginTop: "auto", bottom: 0 }}
        component="footer"
        square
        variant="outlined"
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              flexGrow: 1,
              justifyContent: "center",
              display: "flex",
              my: 1,
            }}
          >
            {/* <Link href="/">
            <Image priority src="/Logo.svg" width={75} height={30} alt="Logo" />
          </Link> */}
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              mb: 2,
            }}
          >
            <Typography variant="caption" color="initial">
              <ul style={{ display: "flex", fontSize: 35 }}>
                {footer.map((foot, index) => {
                  return (
                    <li
                      key={index}
                      style={{ listStyleType: "none", padding: 25 }}
                    >
                      {foot}
                    </li>
                  );
                })}
              </ul>
              <hr />
              <div style={{ display: "flex", fontSize: 25 }}>
                <h5> Copyright ©2022. [] Limited </h5>
                <h5 style={{ paddingLeft: 35 }}>Our Socials</h5>

                <div style={{ paddingLeft: 25 }}>
                  <i
                    style={{ paddingLeft: 25 }}
                    class="fa-brands fa-instagram fa-xl"
                  ></i>
                  <i
                    style={{ paddingLeft: 25 }}
                    class="fa-brands fa-facebook fa-xl"
                  ></i>
                  <i
                    style={{ paddingLeft: 25 }}
                    class="fa-brands fa-twitter fa-xl"
                  ></i>
                  <i
                    style={{ paddingLeft: 25 }}
                    class="fa-brands fa-snapchat fa-xl"
                  ></i>
                </div>
              </div>
            </Typography>
          </Box>
        </Container>
      </Paper>
    </div>
  );
}
export default Footer;
