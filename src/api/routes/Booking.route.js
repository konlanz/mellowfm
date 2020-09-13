"use strict"
const express = require("express");
const router = express.Router();
let Booking = require("../models/Booking");

router.get('/', (req, res)=>{
    Booking.find({}, (err, bookind_data)=>{
        if(err){
            console.log("err");

        }else{
            res.json(bookind_data);
        }
    })
});
 
router.post('/add', (req, res)=>{
    var schedule = req.body;
    console.log(schedule);
    new Booking(schedule)
    .save()
    .then(()=>{
        res.status(200).json({'Schedules': 'Schedules Added'})
    })
    .catch(()=>{
        res.status(400).send("Unable to add Schedule");
    });
})

module.exports= router;