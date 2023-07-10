const express = require('express');
const invoiceRouter = require("./invoice.router");
const methodsRouter = require("./methods.router");
const employeeRouter = require("./employee.router");
const methodsRouter = require("./methods.router");
const { ro } = require('@faker-js/faker');

const apiRouter = (app) => {
  const router = express.Router();
app.use('/api/v1', router)
    router.use('/invoice', invoiceRouter); 
    router.use('/methods', methodsRouter);
app.use('/api/v2', router)  
    router.use('/employee', employeeRouter);
    
}



module.exports = apiRouter;
