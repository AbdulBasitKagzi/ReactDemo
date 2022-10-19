import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";

import { userSignup, authAction } from "../store/authReducer";

import "./Signup.css";

// mui imports
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
  // const [fName, setFname] = useState("");
  // const [lName, setLname] = useState("");
  // const [uEmail, setUemail] = useState("");
  // const [password, setPassword] = useState("");
  // const [confirmPassword, setConfirmPassword] = useState("");
  const fName = React.useRef(null);
  const lName = React.useRef(null);
  const uEmail = React.useRef(null);
  const password = React.useRef(null);
  const confirmPassword = React.useRef(null);

  // states to handle validation
  const [firstName, setFirstName] = useState(false);
  const [lastName, setLastName] = useState(false);
  const [email, setEmail] = useState(false);
  const [upassword, setuPassword] = useState(false);
  const [cpassword, setCPassword] = useState(false);

  // to empty fileds
  const emptyFields = () => {
    fName.current.value = "";
    lName.current.value = "";
    uEmail.current.value = "";
    password.current.value = "";
    confirmPassword.current.value = "";
  };
  //   doing form submission and handling validation
  const handleSubmit = (event) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);

    const userData = {
      email: data.get("email"),
      password: data.get("password"),
      confirmpassword: data.get("confirmpassword"),
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
    };

    if (userData.firstName === "") {
      setFirstName(true);
    }
    if (userData.lastName === "") {
      setLastName(true);
    }
    if (userData.email === "") {
      setEmail(true);
    }
    if (userData.password === "" || userData.password.length < 6) {
      setuPassword(true);
    }
    if (userData.password !== userData.confirmpassword) {
      setCPassword(true);
    }
    if (
      fName.current.value === "" ||
      lName.current.value === "" ||
      uEmail.current.value === "" ||
      password.current.value === "" ||
      confirmPassword.current.value === "" ||
      password.current.value !== confirmPassword.current.value ||
      password.current.value.length < 6
    ) {
      return;
    }

    // dispatching action
    dispatch(
      userSignup({
        FirstName: fName.current.value,
        LastName: lName.current.value,
        email: uEmail.current.value,
        password: password.current.value,
        confirmPassword: confirmPassword.current.value,
      })
    );
  };

  // to prevent user signup without correct credentials
  useEffect(() => {
    !error && token && navigate("/");
    emptyFields();
    // eslint-disable-next-line
  }, [token]);

  return (
    <Box backgroundColor="black">
      <Box className="container">
        <Container
          component="main"
          maxWidth="xs"
          sx={{ backgroundColor: "whitesmoke" }}
        >
          <Box
            sx={{
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
            {error && (
              <Stack sx={{ width: "100%" }} spacing={2}>
                <Alert severity="error">{error}</Alert>
              </Stack>
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
                    sx={{ pb: 1 }}
                    ref={fName}
                    autoComplete="given-name"
                    name="firstName"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    autoFocus
                    onChange={(event) => {
                      fName.current.value = event.target.value;
                      if (fName.current.value === "") {
                        setFirstName(true);
                      } else {
                        setFirstName(false);
                      }
                    }}
                  />
                  {firstName && (
                    <Alert severity="error">Enter First Name</Alert>
                  )}
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    sx={{ pb: 1 }}
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    autoComplete="family-name"
                    ref={lName}
                    onChange={(event) => {
                      lName.current.value = event.target.value;
                      if (lName.current.value === "") {
                        setLastName(true);
                      } else {
                        setLastName(false);
                      }
                    }}
                  />
                  {lastName && <Alert severity="error">Enter Last Name</Alert>}
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    sx={{ pb: 1 }}
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    ref={uEmail}
                    onChange={(event) => {
                      uEmail.current.value = event.target.value;
                      if (uEmail.current.value === "") {
                        setEmail(true);
                      } else {
                        setEmail(false);
                        dispatch(authAction.clearMessage());
                      }
                    }}
                  />
                  {email && <Alert severity="error">Enter email address</Alert>}
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    sx={{ pb: 1 }}
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                    ref={password}
                    onChange={(event) => {
                      password.current.value = event.target.value;
                      if (password.current.value === "") {
                        setuPassword(true);
                      } else {
                        setuPassword(false);
                      }
                    }}
                  />
                  {upassword && (
                    <Alert severity="error">
                      Password should be greater or equal to 6 characters
                    </Alert>
                  )}
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    sx={{ pb: 1 }}
                    required
                    fullWidth
                    name="confirmpassword"
                    label="Confirm Password"
                    type="password"
                    id="confirmpasswordpassword"
                    autoComplete="new-password"
                    ref={confirmPassword}
                    onChange={(event) => {
                      confirmPassword.current.value = event.target.value;
                      if (confirmPassword.current.value === "") {
                        setCPassword(true);
                      }
                      setCPassword(false);
                    }}
                  />
                  {cpassword && (
                    <Alert severity="error">
                      Password and confirm password must be same
                    </Alert>
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
      </Box>
    </Box>
  );
}

export default Signup;
