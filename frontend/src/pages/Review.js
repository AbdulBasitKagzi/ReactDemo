import * as React from "react";
import { useSelector } from "react-redux";

// mui imports
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Grid from "@mui/material/Grid";
import Alert from "@mui/material/Alert";

function Review({ errorAlert }) {
  // to use data from redux store
  const { data } = useSelector((state) => state.order);

  const order = JSON.parse(localStorage.getItem("orderData"));

  // objects to use data from {data} to use on this page
  const customers = [
    {
      Customer: "Customer Name",
      name: `${order.FirstName} ${order.LastName}`,
    },
  ];

  const products = [
    {
      GoodsType: "Goods",
      Goods: `${order.goodsType}`,
      Weight: "Weight",
      Capacity: `${order.Weight}`,
    },
  ];
  const vehicles = [
    {
      vehicle: "Vehicle",
      vehicleName: `${order.vehicle}`,
    },
  ];
  const price = [
    {
      price: "Amount",
      amount: `${order.price}`,
    },
  ];

  const addresses = [
    `${order.pickUp}`,
    `${order.destination}`,
    `${order.deliveryAddress}`,
  ];

  return (
    <React.Fragment>
      <Typography variant="h4" gutterBottom>
        Order summary
      </Typography>

      <List disablePadding>
        {customers.map((customer) => (
          <ListItem key={customer.Customer} sx={{ py: 1, px: 0 }}>
            <ListItemText primary={customer.Customer} />
            <Typography variant="body2" name="name">
              {customer.name}
            </Typography>
          </ListItem>
        ))}

        {products.map((product) => (
          <ListItem key={product.Goods} sx={{ py: 1, px: 0 }}>
            <ListItemText primary={product.GoodsType} />
            <Typography variant="body2" name="product">
              {product.Goods}
            </Typography>
          </ListItem>
        ))}

        {products.map((product) => (
          <ListItem key={product.Weight} sx={{ py: 1, px: 0 }}>
            <ListItemText primary={product.Weight} />
            <Typography variant="body2" name="capacity">
              {product.Capacity}
            </Typography>
          </ListItem>
        ))}

        {vehicles.map((vehicle) => (
          <ListItem key={vehicle.vehicle} sx={{ py: 1, px: 0 }}>
            <ListItemText primary={vehicle.vehicle} />
            <Typography variant="body2" name="vehicle">
              {vehicle.vehicleName}
            </Typography>
          </ListItem>
        ))}

        {price.map((price) => (
          <ListItem key={price.price} sx={{ py: 1, px: 0 }}>
            <ListItemText primary={price.price} />
            <Typography variant="body2" name="amount">
              {" "}
              $ {price.amount}
            </Typography>
          </ListItem>
        ))}

        {/* <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            $34.06
          </Typography>
        </ListItem> */}
      </List>

      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h4" gutterBottom sx={{ mt: 2 }}>
            Shipping
          </Typography>
          <Typography
            gutterBottom
          >{`${data.FirstName} ${data.LastName}`}</Typography>
          <Typography gutterBottom>{`From : ${addresses[0]}`}</Typography>
          <Typography gutterBottom>{`To : ${addresses[1]}`}</Typography>
          <Typography
            gutterBottom
          >{`DeliveryAddress : ${addresses[2]}`}</Typography>
        </Grid>
        {/* <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Payment details
          </Typography>
          <Grid container>
            {payments.map((payment) => (
              <React.Fragment key={payment.name}>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.name}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.detail}</Typography>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </Grid> */}
      </Grid>
      {errorAlert && <Alert severity="success">Order Place 😊</Alert>}
    </React.Fragment>
  );
}

export default Review;
