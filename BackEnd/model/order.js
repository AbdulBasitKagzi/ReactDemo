const mongoose = require("mongoose");

const orderSchema = mongoose.Schema(
  {
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "customeruser",
    },
    FirstName: {
      type: String,
      required: true,
    },
    LastName: {
      type: String,
      required: true,
    },
    vehicle: {
      type: String,
      required: true,
    },
    goodsType: {
      type: String,
      required: true,
    },
    Weight: {
      type: String,
      required: true,
    },
    pickUp: {
      type: String,
      required: true,
    },
    destination: {
      type: String,
      required: true,
    },
    pickUpAddress: {
      type: String,
      required: true,
    },
    deliveryAddress: {
      type: String,
      required: true,
    },
    distance: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
    paymentType: {
      type: String,
      required: true,
      default: "card",
    },
    paymentStatus: {
      type: String,
      required: true,
      default: "paid",
    },
  },
  { timestamps: true }
);

const orders = mongoose.model("order", orderSchema);
module.exports = orders;
