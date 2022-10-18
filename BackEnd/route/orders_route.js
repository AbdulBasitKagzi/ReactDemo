const express = require("express");
const getUserId = require("../middleware/middleware");
const customer = require("../model/customerUser");
const orders = require("../model/order");

require("dotenv").config({ path: "config.env" });

const orderRoute = express.Router();

const api = process.env.API;

// api to order
orderRoute.post(`${api}/placeOrder`, getUserId, async (req, res) => {
  // to take date
  //   const date = new Date();
  //   console.log(new Date(date.getFullYear(), date.getMonth(), date.getDate()));

  try {
    // to find user
    const user = await customer.findOne({ _id: req.userId });
    if (!user) return res.status(400).json({ Message: "No user Found" });
    console.log("orderuser", user);

    //   validation
    if (req.body.pickUp === "") {
      return res.status(400).json({ message: "Please enter PickUp Location" });
    } else if (req.body.destination === "") {
      return res
        .status(400)
        .json({ message: "Please enter Destination Location" });
    } else if (req.body.vehicle === "") {
      return res.status(400).json({ message: "Please select vehicle" });
    } else if (req.body.goodsType === "") {
      return res
        .status(400)
        .json({ message: "Please select goods to deliver" });
    } else if (req.body.Weight === "") {
      return res.status(400).json({ message: "Please Enter Weight " });
    } else if (req.body.pickUpAddress === "") {
      return res.status(400).json({ message: "Please enter PickUp Address" });
    } else if (req.body.deliveryAddress === "") {
      return res
        .status(400)
        .json({ message: "Please enter Destination Address" });
    } else if (req.body.date === "") {
      return res.status(400).json({ message: "Please enter Date" });
    } else if (req.body.time === "") {
      return res.status(400).json({ message: "Please enter Time" });
    }

    // const vehicle = await Vehicles.findOne({ type: goodsType });
    // console.log()

    //   to create orders
    const order = await orders.create({
      owner: req.userId,
      FirstName: user.FirstName,
      LastName: user.LastName,
      pickUp: req.body.pickUp,
      destination: req.body.destination,
      vehicle: req.body.vehicle,
      goodsType: req.body.goodsType,
      Weight: req.body.Weight,
      distance: req.body.distance,
      price: req.body.price,
      pickUpAddress: req.body.pickUpAddress,
      deliveryAddress: req.body.deliveryAddress,
      date: req.body.date,
      time: req.body.time,
    });
    console.log("sdfasf", order);

    return res.status(200).json(order);
  } catch (error) {
    console.log("ordererror", error);
    return res.status(400).send("somethig went wrong");
  }
  // to find user for first name last name and id
});

// api to get orders
orderRoute.get(`${api}/orders`, getUserId, async (req, res) => {
  try {
    // to find user role
    const findAdmin = await customer.findOne({ _id: req.userId });
    console.log("find---", findAdmin);
    if (findAdmin.role !== "Admin") {
      return res
        .status(400)
        .json({ message: "You are not authorised to view orders detail" });
    }
    // to get orders
    const allOrders = await orders.find();
    return res.status(200).json(allOrders);
  } catch (error) {
    console.log(error);
    return res.status(400).send("somethig went wrong", error);
  }
});

orderRoute.get("/getAllOrders", async (req, res) => {
  return res.status(200).json({ message: "I am working" });
});
module.exports = orderRoute;
