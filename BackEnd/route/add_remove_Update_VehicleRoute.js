const express = require("express");
const { body, validationResult, value } = require("express-validator");
require("dotenv").config({ path: "config.env" });
var ObjectId = require("mongodb").ObjectID;

const getUserId = require("../middleware/middleware");
const customer = require("../model/customerUser");
const Vehicles = require("../model/vehicle");

const vehicleRoute = express.Router();

//api
const api = process.env.API;

// register vehicle
vehicleRoute.post(
  `${api}/addvehicle`,

  [
    body("type", "Enter a valid type").not().isEmpty(),
    body("vNumber", "Enter registered number for your vehicle").not().isEmpty(),
    body("capacity", "Enter valid capacity of the vehicle")
      .not()
      .isEmpty()
      .isFloat({ min: 1.0 }),
    body("initialPrice", "Enter valid price ").isInt({ min: 10 }),
  ],
  getUserId,
  async (req, res) => {
    let success = false;
    const errors = validationResult(req);
    console.log(req.body);
    if (!errors.isEmpty()) {
      return res.status(422).json(
        errors
          .array()
          .map((err) => {
            return err.msg;
          })
          .join(", ")
      );
    }

    // to find if user is admin or not
    const userAdmin = await customer.findById({ _id: req.userId });
    console.log("admin", userAdmin);
    console.log(userAdmin.role);

    if (userAdmin.role !== "Admin") {
      return res.status(400).json({
        success,
        message: "You are not eligible to register the vehicle",
      });
    }
    const registeredVehicle = await Vehicles.findOne({
      vNumber: req.body.vNumber,
    });
    console.log(registeredVehicle);
    try {
      const { type, vNumber, capacity, initialPrice, owner } = req.body;

      if (registeredVehicle) {
        return res
          .status(400)
          .json({ success, message: "This vehicle is already registered" });
      }
      const newVehicle = await Vehicles.create({
        owner: req.userId,
        type,
        vNumber,
        capacity,
        initialPrice,
      });
      success = true;
      return res
        .status(200)
        .json({ success, newVehicle, message: "New vehicle Added" });
    } catch (error) {
      return res.status(500).send("Internal server error");
    }
  }
);

// delete vehicle
vehicleRoute.delete(`${api}/deletevehicle/:id`, getUserId, async (req, res) => {
  let success = false;
  const vehicleId = req.params.id;
  console.log("vehicle id to delete", vehicleId);

  const findVehicle = await Vehicles.findById({ _id: ObjectId(vehicleId) });
  if (!findVehicle) {
    return res.status(400).json({ success, message: "Vehicle not found" });
  }
  // console.log(JSON.stringify(findVehicle.owner));
  // console.log(JSON.stringify(req.userId));
  try {
    if (JSON.stringify(req.userId) !== JSON.stringify(findVehicle.owner)) {
      return res
        .status(400)
        .json({ success, message: "Your are not eligible to delete" });
    }

    const deletedVehicle = await Vehicles.findByIdAndDelete({
      _id: ObjectId(vehicleId),
    });
    success = true;
    return res
      .status(200)
      .json({ message: "vehicle deleted", success, deletedVehicle });
  } catch (error) {
    return res.status(500).send("Internal server error");
  }
});

// to get all vehicles
vehicleRoute.get(`${api}/getVehicle`, async (req, res) => {
  let success = false;

  const findVehicle = await Vehicles.find();
  try {
    if (!findVehicle) {
      return res.status(400).json({ success, message: "No data found" });
    }
    console.log(findVehicle);
    return res.status(200).json({ success, findVehicle });
  } catch (error) {
    console.log("getvehcileerror", error);
    return res.status(500).send("Internal Server Error");
  }
});

// to update vehicle
vehicleRoute.patch(`${api}/updateVehicle/:id`, getUserId, async (req, res) => {
  let success = false;
  const id = req.params.id;

  try {
    // to find vehicle to edit
    const findVehicle = await Vehicles.findById({ _id: ObjectId(id) });
    if (!findVehicle) {
      return res.status(400).json({ success, message: "Vehicle not found" });
    }

    // verifying owner
    if (JSON.stringify(req.userId) !== JSON.stringify(findVehicle.owner)) {
      return res
        .status(400)
        .json({ success, message: "Your are not eligible to edit" });
    }

    // finding the vehicle with same number
    const registeredVehicle = await Vehicles.findOne({
      vNumber: req.body.vNumber,
    });
    console.log(registeredVehicle);

    if (registeredVehicle) {
      return res.status(400).json({
        success,
        message: "The vehicle with this registered number is already there",
      });
    }

    if (req.body.type === "") {
      return res.status(400).json({ message: "Type should not be empty" });
    }
    if (req.body.vNumber === "") {
      return res
        .status(400)
        .json({ message: "Enter the registered number for vehicle" });
    }
    if (req.body.capacity === "") {
      return res.status(400).json({ message: "Enter the capacity of vehicle" });
    }
    if (req.body.initialPrice === "") {
      return res
        .status(400)
        .json({ message: "Enter the initialPrice of vehicle" });
    }
    const updatedVehicle = await Vehicles.findByIdAndUpdate(
      { _id: id },
      {
        type: req.body.type,
        vNumber: req.body.vNumber,
        capacity: req.body.capacity,
        initialPrice: req.body.initialPrice,
      },
      { new: true }
    );
    success = true;
    return res
      .status(200)
      .json({ success, message: "Vehicle Updated Successfully" });
  } catch (error) {
    console.log("update Vehicle error", error);
    return res.status(500).send("Internal Server Error");
  }
});
module.exports = vehicleRoute;
