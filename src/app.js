const express = require("express");
const app = express();

const cors = require("cors");
app.use(cors());

app.use(express.json());

const userRoute = require("./routes/userRoute");
app.use("/users", userRoute);

module.exports = app;