const express = require('express');
const methodsService = require("../services/methods.services");
const router = express.Router();

router.get("/", (req, res) => {
  const allMethods = methodsService.find();
  res.json(allMethods);
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  const method = methodsService.findOne(id);
  res.json(method);
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
