const express = require("express");
const app = express();

const PORT = 3000;

const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/event_management")
    .then(()=>{
        console.log("database connected");
    }).catch((err)=>{
        console.log(err);
    })

app.use(express.json());
app.use("/event", require("./routers/event.routes"));

app.listen(PORT, ()=>{
    console.log("server on port", PORT);
})