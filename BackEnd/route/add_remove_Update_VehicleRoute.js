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
    if (userAdmin.role !== "Admin") {
      return res.status(400).json({
        success,
        message: "You are not eligible to register the vehicle",
      });
    }
    const registeredVehicle = await Vehicles.findOne({
      vNumber: req.body.vNumber,
    });
    try {
      const { type, vNumber, capacity, initialPrice, imageUrl } = req.body;

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
        imageUrl,
      });
      success = true;
      return res
        .status(200)
        .json({ success, newVehicle, message: "New vehicle Added" });
    } catch (error) {
      return res.status(400).send("somethig went wrong");
    }
  }
);

// delete vehicle
vehicleRoute.delete(`${api}/deletevehicle/:id`, getUserId, async (req, res) => {
  let success = false;
  const vehicleId = req.params.id;

  const findVehicle = await Vehicles.findById({ _id: ObjectId(vehicleId) });
  if (!findVehicle) {
    return res.status(400).json({ success, message: "Vehicle not found" });
  }

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
    return res.status(400).send("somethig went wrong");
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
    return res.status(200).json({ success, findVehicle });
  } catch (error) {
    return res.status(400).send("somethig went wrong");
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
        imageUrl: req.body.imageUrl,
      },
      { new: true }
    );
    success = true;
    return res
      .status(200)
      .json({ success, message: "Vehicle Updated Successfully" });
  } catch (error) {
    return res.status(400).send("somethig went wrong");
  }
});
module.exports = vehicleRoute;
