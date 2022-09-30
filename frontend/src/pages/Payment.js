import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Alert from "@mui/material/Alert";

function Payment({ setError, error, setOrderData, orderData }) {
  const [cardHolderName, setCardHolderName] = React.useState("");
  const [cardNumber, setCardNumber] = React.useState("");
  const [cardCVV, setCardCVV] = React.useState("");
  const [expireDate, setExpireDate] = React.useState("");

  const [expireDatevalidation, setExpireDateValidation] = React.useState(true);
  const [cardCVVvalidation, setCardCVVvalidation] = React.useState(true);
  const [cardHolderNameValidaton, setCardHolderNameValidation] =
    React.useState(true);
  const [cardNumberValidaton, setCardNumberValidation] = React.useState(true);

  const cardNameValidation = (e) => {
    setCardHolderName(e.target.value);
    setOrderData({ ...orderData, cardHolderName: e.target.value });

    if (e.target.value.length === 0) {
      setCardHolderNameValidation(false);
    } else {
      setCardHolderNameValidation(true);
    }
  };

  const cardNumberValidation = (e) => {
    setCardNumber(e.target.value);

    setOrderData({ ...orderData, cardNumber: e.target.value });
    if (e.target.value.length < 16) {
      setCardNumberValidation(false);
    } else {
      setCardNumberValidation(true);
    }
  };
  const cardCVV_Validation = (e) => {
    setCardCVV(e.target.value);
    setOrderData({ ...orderData, cardCVV: e.target.value });
    if (e.target.value.length < 3) {
      setCardCVVvalidation(false);
    } else {
      setCardCVVvalidation(true);
    }
  };

  const expireValidation = (e) => {
    setExpireDate(e.target.value);
    setOrderData({ ...orderData, expireDate: e.target.value });
    if (e.target.value.length < 4) {
      setExpireDateValidation(false);
    } else {
      setExpireDateValidation(true);
    }
  };

  React.useEffect(() => {
    if (
      cardHolderName !== "" &&
      cardNumber.length == 16 &&
      cardCVV.length === 3 &&
      expireDate.length !== 0
    ) {
      setError(true);
    }
  }, [cardHolderName, cardNumber, cardCVV, expireDate]);
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Payment method
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardholderName"
            label="Name on card"
            fullWidth
            autoComplete="cc-name"
            variant="standard"
            value={cardHolderName}
            onChange={cardNameValidation}
          />
          {!cardHolderNameValidaton && (
            <Alert severity="error">CardHolderName must be filled!</Alert>
          )}
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardNumber"
            label="Card number"
            onInput={(e) => {
              e.target.value = e.target.value.toString().slice(0, 16);
            }}
            fullWidth
            autoComplete="cc-number"
            variant="standard"
            value={cardNumber}
            type="number"
            onChange={cardNumberValidation}
          />
          {!cardNumberValidaton && (
            <Alert severity="error">Enter 16 digit card number </Alert>
          )}
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="expDate"
            label="Expiry date"
            fullWidth
            autoComplete="cc-exp"
            variant="standard"
            onChange={expireValidation}
            value={expireDate}
            onInput={(e) => {
              e.target.value = e.target.value.toString().slice(0, 4);
            }}
          />
          {!expireDatevalidation && (
            <Alert severity="error">Enter Card expiry date</Alert>
          )}
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cvv"
            label="CVV"
            helperText="Last three digits on signature strip"
            fullWidth
            autoComplete="cc-csc"
            variant="standard"
            value={cardCVV}
            type="number"
            onChange={cardCVV_Validation}
            onInput={(e) => {
              e.target.value = e.target.value.toString().slice(0, 3);
            }}
          />
          {!cardCVVvalidation && (
            <Alert severity="error">Enter 3 digit CVV number </Alert>
          )}
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveCard" value="yes" />}
            label="Remember credit card details for next time"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default Payment;
