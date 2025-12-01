const express = require("express");
const mongoose = require("mongoose");

const {HoldingsModel} = require("./models/HoldingsModel");
const { holdings } = require("../dashboard/src/data/data");

const {PositionsModel} = require("./models/PositionsModel");
const { positions } = require("../dashboard/src/data/data");


const {OrdersModel} = require("./models/OrdersModel");

const bodyParser = require('body-parser');
const cors = require('cors');

// const {OrdersModel} = require("./models/OrdersModel");
// const { o } = require("../dashboard/src/data/data");




require('dotenv').config();


const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;


const app = express();


// app.get("/addHoldings", async( req , res ) => {
//     let tempHoldings = [];
//     tempHoldings = holdings;

//     tempHoldings.forEach( 
//         (holding) => {
//             let newHolding = new HoldingsModel(
//                 {
//                     name: holding.name,
//                     qty: holding.qty,
//                     avg: holding.avg,
//                     price: holding.price,
//                     net: holding.net,
//                     day: holding.say,
//                 }
//             );

//             newHolding.save();
//              console.log("Data is saved");
//         }
//     );

//    res.send("All holding data is saved");


// });




// app.get("/addPositions", async(req,res) => {
//     let tempPositions = [];
//     tempPositions = positions;

//     tempPositions.forEach( (position) => {
//         let newPosition = new PositionsModel(
//             {
//                 name: position.name,
//                 product: position.product,
//                 qty: positionqty,
//                 avg: position.avg,
//                 day: position.day,
//                 isLoss: position.isLoss,
//                 net: position.net,
//                 price: position.price,
//             }
//         );

//         newPosition.save();
//         console.log("Data is saved",newPosition.name);
//     });

//     res.send("All data saved");

// });

app.use(cors());
app.use(bodyParser.json());

app.get( "/allHoldings", async (req,res) => {
    let allHoldings = await HoldingsModel.find();
    console.log(allHoldings);
    res.json(allHoldings);

});

app.get( "/allPositions", async (req,res) => {
    let allPositions = await PositionsModel.find();
    //console.log(allPositions);
    res.json(allPositions);

});

app.get( "/allOrders", async (req,res) => {
    let allOrders = await OrdersModel.find();
    //console.log(allPositions);
    res.json(allOrders);

});

app.post( "/newOrder", async (req,res) => {
    let newOrder = new OrdersModel( {
        name: req.body.name,
         qty: req.body.qty,
        price: req.body.price,
        mode: req.body.mode,


    });

    newOrder.save();
    res.send(" New Order Saved");
});



app.listen( PORT, () => {
    console.log("App Started");
    mongoose.connect(uri);
    console.log("DataBase Connected ");
});