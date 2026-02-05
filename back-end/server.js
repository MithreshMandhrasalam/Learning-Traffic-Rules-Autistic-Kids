const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const trafficRoutes = require("./routes/trafficRoutes");

const app = express();
app.use(cors());
app.use(express.json());

connectDB();

app.use("/api/traffic", trafficRoutes);

app.listen(5000, () => console.log("Server running on port 5000"));