require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
const cookieParser = require("cookie-parser");

const { HoldingsModel } = require("./models/HoldingsModel");
const { PositionsModel } = require("./models/PositionsModel");
const { OrdersModel } = require("./models/OrdersModel");

//route
const  router = require("./server/routes/AuthRoute");

const MONGO_URL = process.env.MONGO_URL;
const PORT = process.env.PORT || 3002;
const FRONTEND_URL = process.env.FRONTEND_URL || "http://localhost:3000";

const app = express();

// --- middleware ---
app.use(
  cors({
    origin: FRONTEND_URL,
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

// use built-in body parser
app.use(express.json());

//cookie parser
app.use(cookieParser());

//Route for Authentication
app.use("/", router);

// --- routes ---
app.get("/allHoldings", async (req, res) => {
  try {
    const allHoldings = await HoldingsModel.find();
    res.json(allHoldings);
  } catch (err) {
    console.error("Error fetching holdings:", err);
    res.status(500).send("Server error");
  }
});

app.get("/allPositions", async (req, res) => {
  try {
    const allPositions = await PositionsModel.find();
    res.json(allPositions);
  } catch (err) {
    console.error("Error fetching positions:", err);
    res.status(500).send("Server error");
  }
});

app.get("/allOrders", async (req, res) => {
  try {
    const allOrders = await OrdersModel.find();
    res.json(allOrders);
  } catch (err) {
    console.error("Error fetching orders:", err);
    res.status(500).send("Server error");
  }
});

app.post("/newOrder", async (req, res) => {
  try {
    const { name, qty, price, mode } = req.body;
    const newOrder = new OrdersModel({ name, qty, price, mode });
    await newOrder.save();
    res.status(201).send("New Order Saved");
  } catch (err) {
    console.error("Error saving order:", err);
    res.status(500).send("Server error");
  }
});

// --- start function: connect DB then listen ---
async function start() {
  if (!MONGO_URL) {
    console.error("Missing MONGO_URL in env");
    process.exit(1);
  }

  try {
    await mongoose.connect(MONGO_URL); // no legacy options
    console.log("MongoDB connected successfully");

    app.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });
  } catch (err) {
    console.error("Failed to connect to MongoDB:", err);
    process.exit(1);
  }
}

start();
