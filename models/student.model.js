const mongoose = require("mongoose");

const studentSchema = mongoose.Schema(
    {
        firstName: {
            type: String
        },
        lastName: String,
        email: {
            type: String,
            unique: true,
            lowercase: true, // Yassine.sta@esprit.tn => yassine.sta@esprit.tn
            trim: true // " Yassine.sta@esprit.tn " => "yassine.sta@esprit.tn"
        },
        age: Number
    }
);

const Student = mongoose.model("student", studentSchema); 

module.exports = { Student } 