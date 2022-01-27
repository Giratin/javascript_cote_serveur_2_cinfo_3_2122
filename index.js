const express = require("express");

const app = express();
const PORT = 5000;

const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/workshop_2cinfo3")
    .then(function () {
        console.log("database connected");
    }).catch(function (err) {
        console.log(err);
    });

app.use(express.json());

// const  Student  = require("./models/student.model").Student;
const { Student } = require("./models/student.model");

app.post("/", (req, res) => {
    const { firstName, lastName, email, age } = req.body;
    const student = new Student({ firstName: firstName, lastName, email, age });
    student.save().then(() => {
        return res.json(student);
    }).catch((err) => {
        return res.status(400).json(err);
    })
});

app.get("/", (req, res) => {

    Student.find(function(error,result){
        return res.json(result);
    });

});


app.listen(PORT, () => {
    console.log("server on port", PORT);
});