const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const bodyParser = require("body-parser");

const app = express();

app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan("combined"));

app.use("/api/v1/employee", globalServiceRouter);

app.use("/api/v1/", (req, res) =>
  res.json({
    status: true,
    message: "Test route working",
  })
);

module.exports = app;
