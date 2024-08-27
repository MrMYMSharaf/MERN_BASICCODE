const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const registerSchema = new Schema({
     name:{
        type:String,
        required:true,
     },
     gmail:{
        type:String,
        required:true,
     },
     password:{
        type:String,
        required:true,
     },
});

module.exports = mongoose.model(
    "RegisterModel",//file name
    registerSchema //function name
)