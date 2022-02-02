const express = require("express");
const mongoose = require("mongoose");


mongoose.connect("mongodb://127.0.0.1:27017/database_ref")
    .then(() => {
        console.log("§database connected");
    })
    .catch((err) => {
        console.log({ err });
    });

const app = express();
app.use(express.json());

const PORT = 3000;


app.use("/students", require("./routes/index"));

app.listen(PORT, () => {
    console.log(`server up and running on port ${PORT}`);
})