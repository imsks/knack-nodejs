const router = require("express").Router();
const employeeController = require('../controller/index');

router.route("/").get(employeeController.getAllEmployees);

module.exports = router;