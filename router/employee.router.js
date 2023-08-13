const express = require('express');
const Employee = require("../services/employee.service");
const {insertSchemaEmployee, updateSchemaEmployee, getOneIdSchemaEmployee} = require("../schema/employee.schema");
const {validatorSchema} = require("../middleware/validator.schema");

router.get("/",async (req, res) => {
  try {
    const allEmployees = await service.findAll();
  res.status(200).json(allEmployees);
  }catch (Error){
    next(Error)
  }
  
});

router.get("/", async (req, res) => {
  const { id } = req.params;
  const employee = service.findById(id);
  res.json(employee);
});

router.post('/', 
  validatorSchema(insertSchemaEmployee, "body"),
  async (req, res) => {
    try{
      const body = req.body;
      const newEmployee = service.created(body);
      res.json({
      message: "Create",
      data: newEmployee
  });
  } catch (error){
    next(error)
  }
  
});

router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const updateEmployee = service.update(id, body);
  res.json({
    message: "Update",
    updateEmployee
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



// 
