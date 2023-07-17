const express = require('express');
const router = express.Router();

const invoiceRouter = require("./invoice.router");
const methodsRouter = require("./methods.router");
const employeeRouter = require("./employee.router");
const salaryEmployeeRouter = require("./salaryEmployee.router");

router.use('/invoice', invoiceRouter);
router.use('/methods', methodsRouter);
router.use('/employee', employeeRouter);
router.use('/salaryEmployee', salaryEmployeeRouter);

module.exports = router;
