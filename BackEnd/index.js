const express = require("express");
const route = require("./route/route");
const connectToMongo = require("./db/db");
const cors = require("cors");
const customerUserRoute = require("./route/customerUserRoute");
const vehicleRoute = require("./route/add_remove_Update_VehicleRoute");
const goodsRoute = require("./route/add_delete_goods");

require("dotenv").config({ path: "config.env" });

// setting up server
const app = express();

// setting up port
const port = process.env.PORT || 5000;

// setting up route
app.use(cors());
app.use(express.json());
app.use(route);
app.use(customerUserRoute);
app.use(vehicleRoute);
app.use(goodsRoute);

connectToMongo();
// starting up the server
app.listen(port, () => {
  console.log("Server Started ╰(*°▽°*)╯ at :", port);
});
