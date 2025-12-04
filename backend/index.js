// backend/index.js
require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");

const { HoldingsModel } = require("./models/HoldingsModel");
const { PositionsModel } = require("./models/PositionsModel");
const { OrdersModel } = require("./models/OrdersModel");

// auth routes
const router = require("./server/routes/AuthRoute");

const MONGO_URL = process.env.MONGO_URL;
const PORT = process.env.PORT || 3002;
const FRONTEND_URL = process.env.FRONTEND_URL || "http://localhost:3000";

const app = express();

// -------------------- Robust CORS (replace previous app.use(cors({...}))) --------------------
/**
 * FRONTEND_URL may be comma-separated list. This block:
 *  - normalizes values (adds https:// if missing)
 *  - normalizes incoming Origin header (fixes small formatting issues)
 *  - allows exact matches or any *.netlify.app (convenience)
 *  - sends proper Access-Control-Allow-Origin and credentials headers
 */
function normalizeAllowedInput(s) {
  if (!s) return null;
  let t = s.trim();
  if (/^https?:\/\//i.test(t)) return t;
  if (/^https?:/i.test(t)) return t.replace(/^https?:/i, m => m + "//");
  return "https://" + t;
}

const rawAllowed = (FRONTEND_URL || "http://localhost:3000")
  .split(",")
  .map(s => s.trim())
  .filter(Boolean);

const allowed = rawAllowed.map(normalizeAllowedInput).filter(Boolean);
const normalizedAllowed = allowed.map(a => {
  try { return new URL(a).origin; } catch (e) { return a; }
});

function normalizeOriginHeader(origin) {
  if (!origin) return origin;
  try { return new URL(origin).origin; }
  catch (e) {
    const patched = origin.replace(/^https?:/i, m => m + "//");
    try { return new URL(patched).origin; } catch (e2) { return origin; }
  }
}

app.use((req, res, next) => {
  const originHeader = req.headers.origin;
  const normalizedOrigin = normalizeOriginHeader(originHeader);

  // Allow requests from non-browser tools (no origin)
  if (!originHeader) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Credentials", "true");
    return next();
  }

  if (normalizedAllowed.includes(normalizedOrigin) || /\.netlify\.app$/.test(normalizedOrigin)) {
    res.header("Access-Control-Allow-Origin", normalizedOrigin);
    res.header("Vary", "Origin");
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization, Accept");
    if (req.method === "OPTIONS") return res.sendStatus(200);
    return next();
  } else {
    console.warn("CORS denied origin:", originHeader, "normalized->", normalizedOrigin, "allowed->", normalizedAllowed);
    return res.status(403).send("CORS denied");
  }
});
// -----------------------------------------------------------------------------------------------

// use built-in body parser
app.use(express.json());

// cookie parser
app.use(cookieParser());

// --- health route (ensure it's before router so it's always reachable) ---
app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

// Route for Authentication (and any other routes)
app.use("/", router);

// --- application routes ---
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
    await mongoose.connect(MONGO_URL);
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
