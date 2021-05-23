const employeesData = require("../data/index.json");

// 1. Get all employees data
exports.getAllEmployees = async (req, res) => {
  res.status(200).json({
    status: true,
    ...employeesData,
  });
};
