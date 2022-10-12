import React from "react";

// mui imports
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import dayjs from "dayjs";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";

import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";

function OrderPage({ setError, orderData, setOrderData }) {
  const [value, setValue] = React.useState(dayjs());

  const handleChange = (newValue) => {
    setValue(newValue);
    // console.log(new Date(value));
  };

  // to get value
  const [pickUpAddress, setpickUpAddress] = React.useState("");
  const [deliveryAddress, setdeliveryAddress] = React.useState("");

  // to get user data and order from localstorage
  const User = JSON.parse(localStorage.getItem("user"));
  const orders = JSON.parse(localStorage.getItem("abdulOrder"));

  React.useEffect(() => {
    setOrderData({
      ...orderData,
      date: new Date(value).toDateString(),
      time: new Date(value).toISOString(),
      FirstName: User.FirstName,
      LastName: User.LastName,
      pickUp: orders.pickUp,
      destination: orders.destination,
      Weight: orders.Weight,
      vehicle: orders.vehicle,
      goodsType: orders.goodsType,
      distance: orders.distance,
      price: orders.price,
    });

    // eslint-disable-next-line
  }, [value]);

  // for validation
  const [pvalidation, setPValidation] = React.useState(true);
  const [dvalidation, setDValidation] = React.useState(true);

  // validation function
  const Validatior1 = (e) => {
    setpickUpAddress(e.target.value);
    setOrderData({ ...orderData, pickUpAddress: e.target.value });
    if (e.target.value.length === 0) {
      setPValidation(false);
      setError(false);
    } else if (e.target.value.length !== 0 && deliveryAddress.length !== 0) {
      setPValidation(true);
      setError(true);
    } else {
      setPValidation(true);
    }

    // console.log(user);
  };

  // validation function
  const Validatior2 = (e) => {
    setdeliveryAddress(e.target.value);
    setOrderData({ ...orderData, deliveryAddress: e.target.value });
    if (e.target.value.length === 0) {
      setDValidation(false);
      setError(false);
    } else if (e.target.value.length !== 0 && pickUpAddress.length !== 0) {
      setDValidation(true);
      setError(true);
    } else {
      setDValidation(true);
    }
  };
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            autoComplete="given-name"
            variant="standard"
            value={User.FirstName}
            disabled
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="family-name"
            variant="standard"
            value={User.LastName}
            disabled
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="paddress"
            name="paddress"
            label="PickUp Address"
            fullWidth
            autoComplete="shipping address-line1"
            variant="standard"
            value={pickUpAddress}
            onChange={Validatior1}
          />
          {!pvalidation && (
            <Alert severity="error">PickUp Address Must be filled!</Alert>
          )}
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="daddress"
            name="daddress"
            label="Destination Address"
            fullWidth
            autoComplete="shipping address-line2"
            variant="standard"
            value={deliveryAddress}
            onChange={Validatior2}
          />
          {!dvalidation && (
            <Alert severity="error">Destination Address Must be filled!</Alert>
          )}
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="pcity"
            name="pcity"
            label="PickUp City"
            fullWidth
            autoComplete="shipping address-level2"
            variant="standard"
            value={orders.pickUp}
            disabled
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="dcity"
            name="dcity"
            label="Destination City"
            fullWidth
            autoComplete="shipping address-level2"
            variant="standard"
            value={orders.destination}
            disabled
          />
        </Grid>

        <LocalizationProvider
          dateAdapter={AdapterDayjs}
          sx={{ display: "inherit" }}
        >
          <Box sx={{ paddingTop: 5 }}>
            <Stack spacing={3} sx={{ display: { lg: "flow-root" } }}>
              <Box
                sx={{
                  display: "initial",
                  paddingLeft: 2,
                  ml: { lg: "", xs: 3 },
                }}
              >
                <MobileDatePicker
                  label="PickUp Date"
                  inputFormat="DD/MM/YYYY"
                  value={value}
                  minDate={new Date()}
                  onChange={handleChange}
                  renderInput={(params) => <TextField {...params} />}
                />
              </Box>
              <Box
                sx={{
                  display: "initial",

                  pl: { lg: 2, xs: 5 },
                }}
              >
                <TimePicker
                  label="PickUp Time"
                  value={value}
                  onChange={handleChange}
                  renderInput={(params) => <TextField {...params} />}
                />
              </Box>
            </Stack>
          </Box>
        </LocalizationProvider>

        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox color="secondary" name="saveAddress" value="yes" />
            }
            label="Use this address for payment details"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default OrderPage;
