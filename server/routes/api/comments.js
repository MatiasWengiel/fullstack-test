const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    text: "This is a sample comment"
  })
});

module.exports = router;