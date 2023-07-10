const express = require('express');

const router = express.Router();

router.get("/", (req, res) => {
  res.json([{
    id: 1010,
    description: "Salario",
    price: "450",
    quantity: "2"
  }
]);
})

// Get un Elmento
router.get("/:id", (req, res) => {
  const {id} = req.params;
  if (id === "999") {
    res.status(404).json({
      message: "404 not found",

    });
  }
  res.json({
    id: id,
    description: "Salario",
    price: "450",
    quantity: "2"
  });
})

router.post('/', (req, res) => {
  const body = req.body;
  res.status(201).json({
    message: "Create",
    data: body
  });
});

router.patch('/:id', (req, res) => {
  const {id} = req.params;
  const body = req.body;
  res.json({
    message: "Update",
    data: body,
    id,
  });
});

router.delete('/:id', (req, res) => {
  const {id} = req.params;
  res.json({
    message: "Delete",
    id,
  });
});


module.exports = router;
