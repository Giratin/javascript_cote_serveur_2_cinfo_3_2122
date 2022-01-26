const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

const usersRoute = require("./routes/users.route");

app.use(express.json());
app.use("/user", usersRoute);

app.listen(PORT, function () {
    console.log(`SERVER is running on port ${PORT}`);
});