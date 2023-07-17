const express = require('express');
const router = express.Router();

const employeeService = require("../services/employee.service");

router.get("/", (req, res) => {
  const allEmployees = employeeService.findAll();
  res.json(allEmployees);
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  const employee = employeeService.findById(id);
  res.json(employee);
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
