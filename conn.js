const mongoose=require('mongoose');
mongoose.connect("mongodb://localhost:27017/reg-form-data").then(()=>{

console.log("connection with databse is connected successfully");


}).catch((e)=>{

console.log(e+"no connection");

});