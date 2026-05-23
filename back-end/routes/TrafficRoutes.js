const express = require("express");
const router = express.Router();
const TrafficItem = require("../models/TrafficModel");

router.get("/", async (req, res) => {
  try {
    const items = await TrafficItem.find();
    res.json(items);
  } catch (err) {
    console.error("Error fetching traffic items:", err);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;