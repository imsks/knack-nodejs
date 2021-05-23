const express = require("express");
const cors = require("cors");

const employeeRoutes = require("./routes/index");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/v1/employee", employeeRoutes);

module.exports = app;
