const mongoose = require("mongoose");

const classSchema = mongoose.Schema(
    {
        name: String,
    },
    {
        timestamps: true
    }
);

const Classe = mongoose.model('classe', classSchema);

module.exports = { Classe }