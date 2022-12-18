import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { userSignin, authAction } from "../store/authReducer";

// mui imports
import CircularProgress from "@mui/material/CircularProgress";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

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

function Signin() {
  // states to handle validation
  const [uemail, setuEmail] = useState(null);
  const [upassword, setuPassword] = useState(null);

  // states to handle user log in
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { error, token, isLoading } = useSelector((state) => state.user);

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
      return;
    }

    // to dispatch action
    dispatch(userSignin({ email, password }));
  };

  // to prevent user login without correct credentials
  useEffect(() => {
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
    <Grid
      container
      component="main"
      // sx={{
      //   height: { lg: "100vh", xs: "50vh" },
      //   width: { lg: 1100, xs: 300 },
      //   ml: { lg: 15, xs: 5 },
      // }}
      sx={{ height: "100vh", p: 2, backgroundColor: "#e00029" }}
    >
      <CssBaseline />

      <Grid
        item
        xs={12}
        sm={8}
        md={5}
        sx={{
          backgroundColor: "whitesmoke",
        }}
        component={Paper}
        elevation={5}
        rounded
      >
        <Box
          sx={{
            my: 8,
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
          {isLoading && (
            <Box sx={{ display: "flex" }}>
              <CircularProgress />
            </Box>
          )}
          <Typography
            variant="h4"
            sx={{
              mt: 2,
              textAlign: "center",
              fontFamily: "Roboto ",
            }}
          >
            <span
              style={{
                backgroundColor: "#e00029",
                color: "white",
                padding: 5,
              }}
            >
              Kagzi
            </span>{" "}
            Transports
          </Typography>
          <Typography component="h1" variant="h6" sx={{ mt: 2 }}>
            Sign in to your account
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

                setuEmail(false);
                dispatch(authAction.clearMessage());
              }}
            />
            {uemail && <Alert severity="error">"Enter registered email"</Alert>}

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
        md={7}
        sm={4}
        sx={{
          backgroundImage:
            "url(https://img.freepik.com/free-vector/hand-drawn-red-transport-truck-illustration_23-2149163911.jpg?w=740&t=st=1665565426~exp=1665566026~hmac=38e662a4b8cac3de74b7bc49780ef5514d6c3528984111a87cf2569c1e352204)",
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
  );
}
export default Signin;
