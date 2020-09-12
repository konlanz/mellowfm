"use strict"
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let City = new Schema({
    Departure:{
        type: String,
        max: 250,
        unique: true
        
    },
    Destination: {
        type: String,
        max: 250,
        unique: true
    }
});
module.exports = mongoose.model("City", City);