const express = require('express');

const router = express.Router();

router.get('/', (req, res) =>{
  res.json({
    method_id: 2345,
    get: "GetValueToPay",
    toString: "ToString",
    validation: "ValidateSalary"
  });
});




module.exports = router;
