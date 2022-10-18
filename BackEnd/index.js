const express = require("express");
const path = require("path");
const route = require("./route/route");
const connectToMongo = require("./db/db");
const cors = require("cors");
const customerUserRoute = require("./route/customerUserRoute");
const vehicleRoute = require("./route/add_remove_Update_VehicleRoute");
const goodsRoute = require("./route/add_delete_goods");
const orderRoute = require("./route/orders_route");
const paymentRoute = require("./route/payment");

require("dotenv").config({ path: "config.env" });

// setting up server
const app = express();

// setting up port
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// to serve to client
app.use(express.static(path.join(__dirname + "/public")));
app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "/public", "index.html"));
});
// setting up route
app.use(route);
app.use(customerUserRoute);
app.use(vehicleRoute);
app.use(goodsRoute);
app.use(orderRoute);
app.use(paymentRoute);

connectToMongo();
// starting up the server
app.listen(port, () => {
  console.log("Server Started ╰(*°▽°*)╯ at :", port);
});
