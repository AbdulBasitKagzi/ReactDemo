import React from "react";
import Payment from "./Payment";
import Review from "./Review";
import OrderPage from "./OrderPage";
import NavBar from "../component/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { order } from "../store/orderReducer";
import emailjs from "@emailjs/browser";

// mui imports
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { orderAction } from "../store/orderReducer";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const steps = ["Shipping address", "Payment details", "Review your order"];

const theme = createTheme();

function Checkout() {
  function getStepContent(step) {
    switch (step) {
      case 0:
        return (
          <OrderPage
            setError={setError}
            error={error}
            setOrderData={setOrderData}
            orderData={orderData}
          />
        );
      case 1:
        return (
          <Payment
            setError={setError}
            error={error}
            setOrderData={setOrderData}
            orderData={orderData}
          />
        );

      case 2:
        return <Review setAlertError={setErrorAlert} errorAlert={errorAlert} />;
      default:
        throw new Error("Unknown step");
    }
  }

  const [error, setError] = React.useState(false);
  const [activeStep, setActiveStep] = React.useState(0);
  const [errorAlert, setErrorAlert] = React.useState(null);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };
  console.log("step", activeStep);
  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.order);
  const [orderData, setOrderData] = React.useState(data);

  // target values which will get send in email
  const templateParams = {
    pickUp: data.pickUp,
    destination: data.destination,
    goods: data.goodsType,
    vehicle: data.vehicle,
    amount: data.price,
    note: `The truck will be at your door step on ${data.date} at ${data.time}`,
  };
  // to send email to the user
  const sendEmail = (e) => {
    emailjs
      .send(
        "service_xyhz50h",
        "template_44ddzvu",
        templateParams,
        "pzqzsz34NbZltbo-B"
      )
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  const Navigate = useNavigate();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar
        position="absolute"
        color="default"
        elevation={0}
        sx={{
          position: "relative",
          borderBottom: (t) => `1px solid ${t.palette.divider}`,
        }}
      >
        <NavBar />
      </AppBar>
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper
          variant="outlined"
          sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
        >
          <Typography component="h1" variant="h4" align="center">
            Checkout
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom>
                  Thank you for your order.
                </Typography>
                <Typography variant="subtitle1">
                  Your order number is #2001539. We have emailed your order
                  confirmation, and will send you an update when your order has
                  shipped.
                </Typography>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {getStepContent(activeStep)}
                <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                      Back
                    </Button>
                  )}

                  <Button
                    variant="contained"
                    onClick={() => {
                      localStorage.setItem(
                        "orderData",
                        JSON.stringify(orderData)
                      );
                      if (activeStep !== 2) {
                        handleNext();
                        dispatch(
                          orderAction.addOrder({
                            ...data,
                            ...orderData,
                          })
                        );
                        setError(false);
                      } else {
                        //main api call
                        dispatch(order(data));
                        setErrorAlert(true);
                        sendEmail();
                        Navigate("/user/emailpage");
                        localStorage.removeItem("abdulOrder");
                        localStorage.removeItem("orderData");
                      }

                      if (activeStep === 1) {
                        setError(true);
                      }
                    }}
                    sx={{ mt: 3, ml: 1 }}
                    disabled={!error}
                  >
                    {activeStep === steps.length - 1 ? "Place order" : "Next"}
                  </Button>
                </Box>
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
        <Copyright />
      </Container>
    </ThemeProvider>
  );
}

export default Checkout;
