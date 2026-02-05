const express = require("express");
const router = express.Router();
const TrafficItem = require("../models/TrafficModel");

router.get("/", async (req, res) => {
  const items = await TrafficItem.find();
  res.json(items);
});

module.exports = router;    