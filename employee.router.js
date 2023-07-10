const express = require('express');

const router = express.Router();

router.get('/', (req, res) =>{
  res.json({
    method_id: 1234,
    get: "GetValueToPay",
    toString: "ToString"
  });
});




module.exports = router;
