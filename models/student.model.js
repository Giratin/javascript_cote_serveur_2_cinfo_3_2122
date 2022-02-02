const mongoose = require("mongoose");

const studentSchema = mongoose.Schema(
    {
        name: String,
        email: {
            type: String,
            trim: true
        },
        classroom: {
            type: mongoose.Types.ObjectId,
            ref: "classe"
        }
    },
    {
        timestamps: true
    }
);

const Student = mongoose.model('student', studentSchema);

module.exports = { Student }