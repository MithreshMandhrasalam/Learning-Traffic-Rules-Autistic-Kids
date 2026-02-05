const mongoose = require("mongoose");

const TrafficSchema = new mongoose.Schema({
  name: String,
  description: String,
  image: String,
});

module.exports = mongoose.model("TrafficItem", TrafficSchema);