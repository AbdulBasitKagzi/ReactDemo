const express = require("express");
const getUserId = require("../middleware/middleware");
const customer = require("../model/customerUser");
const goods = require("../model/goods");
var ObjectId = require("mongodb").ObjectID;

require("dotenv").config({ path: "config.env" });

const api = process.env.API;
const goodsRoute = express.Router();

// to add goods
goodsRoute.post(`${api}/addgoods`, getUserId, async (req, res) => {
  let success = false;
  const findUser = await customer.findById({ _id: req.userId });
  console.log("user", findUser.role);
  try {
    if (!findUser) {
      return res.status(400).json({ success, message: "User doesnot exists" });
    }
    if (findUser.role !== "Admin") {
      return res
        .status(400)
        .json({ success, message: "You are not eligible to add" });
    }
    if (req.body.type === "") {
      return res
        .status(400)
        .json({ success, message: "Goods Type should not be empty" });
    }
    const registeredGoods = await goods.findOne({ type: req.body.type });
    if (registeredGoods) {
      console.log(registeredGoods);
      return res
        .status(400)
        .json({ success, message: "This goods type is already there" });
    }
    const good = await goods.create({
      owner: req.userId,
      type: req.body.type,
    });
    success = true;
    return res.status(200).json({ success, good });
  } catch (error) {
    console.log("addgoodserror", error);
    return res.status(500).send("Internal Server Error");
  }
});

// to get goodstype
goodsRoute.get(`${api}/getGoods`, async (req, res) => {
  let success = false;
  const good = await goods.find();
  if (!goods) {
    return res.status(400).json({ success, message: "No data found" });
  }
  success = true;
  return res.status(200).json({ success, good });
});

// to delete goodstype
goodsRoute.delete(`${api}/deletegoods/:id`, getUserId, async (req, res) => {
  let success = false;
  const id = req.params.id;

  // const good = await goods.findByIdAndDelete({ _id: id });

  const findGood = await goods.findOne({ _id: id });

  if (!findGood) {
    return res.status(400).json({ success, message: "Good not found" });
  }

  if (JSON.stringify(req.userId) === JSON.stringify(findGood.owner)) {
    const deletedgood = await goods.findByIdAndDelete({ _id: ObjectId(id) });
    success = true;
    return res
      .status(200)
      .json({ success, message: "Good deleted", deletedgood });
  } else {
    return res.status(400).json({ success, message: "Not eligible to delete" });
  }
});

module.exports = goodsRoute;
