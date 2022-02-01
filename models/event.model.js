const mongoose = require("mongoose");

const eventSchema = mongoose.Schema(
    {
        title : String,
        description: {
            type: String
        },
        dateDebut: Date,
        dateFin: Date
    },
    {
        timestamps: true
    }
);

const Event = mongoose.model("event", eventSchema);

module.exports = { Event }