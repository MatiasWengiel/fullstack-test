const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    text: "This is a sample comment"
  })
});

router.post('/', (req, res) => {
  console.log(req.body)
  res.send("good job")
})

module.exports = router;

