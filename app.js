const express = require('express');

const app = express();

const hbs = require('hbs');

require('./db/conn');
const reg_form_data = require('./models/reg')
const path = require('path');
const exp = require('constants');
const alert = require('alert')
const static_path = path.join(__dirname, '../public')

console.log(__dirname);

app.use(express.json())
app.use(express.urlencoded({ extended: false }));
const port = process.env.PORT || 4500;

app.use(express.static(static_path));



app.use(express.urlencoded({ extended: false }));





const dynamicpath = path.join(__dirname, "../templates/views")
const partialpath = path.join(__dirname, "../templates/partials")
app.set("view engine", "hbs");
app.set("views", dynamicpath);

hbs.registerPartials(partialpath)
app.get("/", (req, res) => {

    res.render("index");
});

app.get("/register.hbs", (req, res) => {

    res.render("register")

})

app.post("/register.hbs", async (req, res) => {

    try {
        const password = req.body.password;
        const cpassword = req.body.cpassword;
        if (password === cpassword) {
            const savedReg_Data = new reg_form_data({


                firstname: req.body.firstname,
                lastname: req.body.lastname,
                email: req.body.email,
                gender: req.body.gender,
                Phonenumber: req.body.Phonenumber,
                age: req.body.age,
                password: password,
                cpassword: cpassword
            })


const success_reg_data=await savedReg_Data.save();

res.status(201).render("index")



        } else {
            res.send("Password isn't Matching");
            // alert("password isn't matching")

        }
    } catch (e) {
        res.status(400).send(e)
    }

});

app.listen(port, () => {
    console.log("server is running on 4500 port")

});
