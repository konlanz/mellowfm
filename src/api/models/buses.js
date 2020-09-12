"use strict"
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let Buses = new Schema({
    BusName:{
        type: String,
        max: 250,
        unique: true
        
    },
    SeatsN: {
        type: Number
    },
    partner: {
        type: String,
        max: 100   
    }

});
module.exports = mongoose.model("Buses", Buses);