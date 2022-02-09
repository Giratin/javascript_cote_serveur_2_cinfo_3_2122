const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
    {
        firstName: String,
        lastName: String,
        gender: String,
        phone: String
    }
);

const User = mongoose.model('user', userSchema);

module.exports = { User }