const mongoose = require("mongoose");

const Vehicle = mongoose.Schema(
  {
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "customeruser",
    },
    type: {
      type: String,
      required: true,
    },
    vNumber: {
      type: String,
      required: true,
    },
    capacity: {
      type: String,
      required: true,
    },
    initialPrice: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const Vehicles = mongoose.model("vehicle", Vehicle);

module.exports = Vehicles;
