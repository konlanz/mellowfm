const mongoose = require("mongoose");
let Schema = mongoose.Schema;

let Routes = new Schema({
    Departure: {
        type:String, 
        max:250 
    },
    Destination: {
        type:String, 
        max:250         
    },
    Price: {
        type: Number
    },
    Partner: {
        type: String
    },
    Title: {
        type: String
    }
});
module.exports = mongoose.model("Routes", Routes);