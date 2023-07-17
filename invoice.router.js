const express = require('express');
const invoiceServices = require("../services/invoice.services");
const router = express.Router();

router.get("/", (req, res) => {
  const allInvoices = invoiceServices.findAll();
  res.json(allInvoices);
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  const invoice = invoiceServices.findById(id);
  res.json(invoice);
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
