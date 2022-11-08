const mongoose = require('mongoose');

const reg_data = mongoose.Schema({

    firstname: {
        type: String,
        required: true

    },
    lastname: {


        type: String,
        required: true
    }, email: {
        type: String,
        unique: true,
        required: true



    }, gender: {
        type: String,
        required: true


    },
    Phonenumber: {



        type: Number,
        required: true,
        unique: true
    }, age: {

        type: Number,
    
        required: true
    }
,password:{

    type: String,
    unique: true,
    required: true




},cpassword:{

    type: String,
    unique: true,
    required: true




}


})


const Reg_form_data=   new mongoose.model("Reg_form_data",reg_data);
module.exports=Reg_form_data;
