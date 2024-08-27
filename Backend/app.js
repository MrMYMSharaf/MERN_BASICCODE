const express = require("express");
const mongoose = require("mongoose");
const router = require("./Routes/UserRoutes");

const app = express();
const cors = require("cors");

//Middleware
app.use(express.json());
app.use(cors());
app.use("/users", router);


mongoose.connect("mongodb://localhost:27017/")
.then(() => console.log("Connect to MongoDB"))
.then(()=>{
    app.listen(5000);
}).
catch((err)=> console.log((err)));


//---------------Register Function-------------
// Call Register Model
require("./Model/RegisterModel");
const User = mongoose.model("RegisterModel")
app.post("/register",async(req,res)=>{
    const{name,gmail,password} = req.body;
    try{
        await User.create({
            name,gmail,password,
        });
        res.send({status:"ok"});
    }catch(err){
        res.send({status:"err"})
    }
})

//==============login function---------------
app.post("/Login",async(req,res)=>{
    const{gmail,password}=req.body;
    try{
        const user = await User.findOne({gmail});
        if(!user){
            return res.json({err:"user Not Found"})
        }
        if(user.password === password){
            return res.json({status:"ok"});
        }else{
            return res.json({err:'incomplete'})
        }
    }
    catch(err){
        console.error(err);
        res.status(500).json({err:"server err"})
    }
});