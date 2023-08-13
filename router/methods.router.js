const express = require('express');
const Methods = require("../services/methods.services");
const {insertSchemaMethods, updateSchemaMethods, getOneIdSchemaMethods}; require("../schema/methods.schema"); 
const {validatorSchema} = require("../middleware/validator.schema");


router.get("/", (req, res) => {
  const allMethods = methodsService.find();
  res.json(allMethods);
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  const method = methodsService.findOne(id);
  res.json(method);
});

router.post('/', 
validatorSchema(insertSchemaMethods, "body"),
async (req, res) => {
  try{
    const body = req.body;
    res.status(201).json({
      message: "Create",
      data: body
    });
  } catch(error){
    next(error)
  }
  
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
