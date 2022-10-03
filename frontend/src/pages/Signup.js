import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userSignup } from "../store/authReducer";
import { useNavigate, Link } from "react-router-dom";

import CircularProgress from "@mui/material/CircularProgress";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        GoodsTransportService
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

function Signup() {
  const dispatch = useDispatch();
  const { isLoading, error, token } = useSelector((state) => state.user);
  const navigate = useNavigate();

  // states for taking input values
  const [fName, setFname] = useState("");
  const [lName, setLname] = useState("");
  const [uEmail, setUemail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // states to handle validation
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [email, setEmail] = useState(null);
  const [upassword, setuPassword] = useState(null);
  const [cpassword, setCPassword] = useState(null);

  // to empty fileds
  const emptyFields = () => {
    setFname("");
    setLname("");
    setUemail("");
    setPassword("");
    setConfirmPassword("");
  };
  //   doing form submission and handling validation
  const handleSubmit = (event) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);

    console.log({
      email: data.get("email"),
      password: data.get("password"),
      confirmpassword: data.get("confirmpassword"),
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
    });

    const userData = {
      email: data.get("email"),
      password: data.get("password"),
      confirmpassword: data.get("confirmpassword"),
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
    };

    console.log(userData);
    if (userData.firstName === "") {
      setFirstName(true);
    }
    if (userData.lastName === "") {
      setLastName(true);
    }
    if (userData.email === "" || !userData.email.includes("@")) {
      setEmail(true);
    }
    if (userData.password === "" || userData.password.length < 5) {
      setuPassword(true);
    }
    if (userData.password !== userData.confirmpassword) {
      setCPassword(true);
    }
    if (
      fName === "" ||
      lName === "" ||
      email === "" ||
      password === "" ||
      confirmPassword === "" ||
      password !== confirmPassword
    ) {
      console.log("error");
      return;
    }

    // dispatching action
    dispatch(
      userSignup({
        FirstName: fName,
        LastName: lName,
        email: uEmail,
        password: password,
        confirmPassword: confirmPassword,
      })
    );
  };

  // to prevent user signup without correct credentials
  useEffect(() => {
    !error && token && navigate("/home2");
    emptyFields();
    // eslint-disable-next-line
  }, [token]);

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />

        {error && (
          <Stack sx={{ width: "100%" }} spacing={2}>
            <Alert severity="error">{error}</Alert>
          </Stack>
        )}
        <Box
          sx={{
            marginTop: 0.5,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {isLoading && (
            <Box sx={{ display: "flex" }}>
              <CircularProgress />
            </Box>
          )}
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  value={fName}
                  autoFocus
                  onChange={(event) => {
                    setFname(event.target.value);
                    console.log(fName);
                    setFirstName(false);
                  }}
                />
                {firstName && (
                  <p style={{ color: "red", fontSize: 13 }}>Enter First Name</p>
                )}
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  value={lName}
                  onChange={(event) => {
                    setLname(event.target.value);
                    console.log(lName);
                    setLastName(false);
                  }}
                />
                {lastName && (
                  <p style={{ color: "red", fontSize: 13 }}>Enter last Name</p>
                )}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value={uEmail}
                  onChange={(event) => {
                    setUemail(event.target.value);
                    console.log(uEmail);
                    setEmail(false);
                  }}
                />
                {email && (
                  <p style={{ color: " red", fontSize: 13 }}>
                    Enter valid email
                  </p>
                )}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  value={password}
                  onChange={(event) => {
                    setPassword(event.target.value);
                    // console.log(password);
                    setuPassword(false);
                  }}
                />
                {upassword && (
                  <p style={{ color: "red", fontSize: 13 }}>
                    Password should be greater or equal to six characters long
                  </p>
                )}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="confirmpassword"
                  label="Confirm Password"
                  type="password"
                  id="confirmpasswordpassword"
                  autoComplete="new-password"
                  value={confirmPassword}
                  onChange={(event) => {
                    setConfirmPassword(event.target.value);
                    // console.log(confirmPassword);
                    setCPassword(false);
                  }}
                />
                {cpassword && (
                  <p style={{ color: "red", fontSize: 13 }}>
                    Password and confirm password must be same
                  </p>
                )}
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link style={{ textDecoration: "none" }} to="/signin">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}

export default Signup;
