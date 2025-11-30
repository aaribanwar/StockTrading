const HoldingSchema = require("../schemas/HoldingSchema");
const { model } = require("mongoose");

const HoldingsModel = new model("holding", HoldingSchema);

module.exports = {HoldingsModel};

