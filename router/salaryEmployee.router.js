const express = require('express');
const salaryEmployeeService = require("../services/salaryemployee.services");
const router = express.Router();

router.get("/", (req, res) => {
  const allSalaryEmployee = salaryEmployeeService.find();
  res.json(allSalaryEmployee);
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  const salaryEmployee = salaryEmployeeService.findOne(id);
  res.json(salaryEmployee);
});

router.post('/', (req, res) => {
  const body = req.body;
  res.status(201).json({
    message: "Create",
    data: body
  });
});

router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  res.json({
    message: "Update",
    data: body,
    id,
  });
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    message: "Delete",
    id,
  });
});

module.exports = router;
