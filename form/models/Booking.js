const mongoose = require("mongoose")

const bookingSchema = new mongoose.Schema({

name:String,
email:String,
room:String,
checkin:String,
checkout:String,
guests:Number

})

module.exports = mongoose.model("Booking",bookingSchema)