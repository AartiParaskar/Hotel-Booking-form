const Admin = require("./models/admin");
const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const cors = require("cors")

const app = express()
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/luxehaven")

app.use(cors())
app.use(bodyParser.json())
app.use(express.static("public"))

app.post("/login", async (req,res)=>{

const {username,password} = req.body;s

const admin = await Admin.findOne({username,password});

if(admin){
res.json({success:true});
}else{
res.json({success:false});
}

});



const Booking = require("./models/Booking")

app.post("/book", async (req,res)=>{

const booking = new Booking(req.body)

await booking.save()

res.json({message:"Booking Confirmed!"})

})

app.listen(3000,()=>{
console.log("Server running on port 3000")
})