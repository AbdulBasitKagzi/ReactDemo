import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { userSignin, authAction } from "../store/authReducer";

import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
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
      <Link
        style={{ textDecoration: "none" }}
        color="inherit"
        href="https://mui.com/"
      >
        Kagzi Transports
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

function Signin() {
  // states to handle validation
  const [uemail, setuEmail] = useState(null);
  const [upassword, setuPassword] = useState(null);

  // states to handle user log in
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { error, token } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // to empty fileds
  const emptyFields = () => {
    setEmail("");
    setPassword("");
  };
  //   doing form submission and handling validation
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
    const userData = {
      email: data.get("email"),
      password: data.get("password"),
    };

    if (userData.email === "") {
      setuEmail(true);
    }
    if (userData.password === "") {
      setuPassword(true);
    }

    if (userData.email === "" || userData.password === "") {
      console.log("all fields must be filled");
      return;
    }

    // to dispatch action
    dispatch(userSignin({ email, password }));
  };

  // to prevent user login without correct credentials
  useEffect(() => {
    console.log(token);
    !error && token && navigate("/");
    emptyFields();
    // eslint-disable-next-line
  }, [token]);

  // const checkError = (variable) => {
  //   if (variable) {
  //     return;
  //   }
  //   navigate("/home");
  //   emptyFields();
  // };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={0} square>
          <Box
            sx={{
              my: 0,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {error && (
              <Stack sx={{ width: "100%" }} spacing={2}>
                <Alert severity="error">{error}</Alert>
              </Stack>
            )}
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>

            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                type="email"
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                  console.log(email);
                  setuEmail(false);
                  dispatch(authAction.clearMessage());
                }}
              />
              {uemail && (
                <Alert severity="error">"Enter registered email"</Alert>
              )}

              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                value={password}
                autoComplete="current-password"
                onChange={(event) => {
                  setPassword(event.target.value);
                  console.log(password);
                  setuPassword(false);
                  dispatch(authAction.clearMessage());
                }}
              />
              {upassword && (
                <Alert severity="error">"Enter correct password"</Alert>
              )}

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#">Forgot password?</Link>
                </Grid>
                <Grid item>
                  <Link style={{ textDecoration: "none" }} to="/signup">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: "url(https://source.unsplash.com/random)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </Grid>
    </ThemeProvider>
  );
}
export default Signin;
