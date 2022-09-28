const mongoose = require("mongoose");

const Goods = mongoose.Schema(
  {
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "customeruser",
    },
    type: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const goods = mongoose.model("goods", Goods);
module.exports = goods;
