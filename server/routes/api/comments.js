const express = require('express');
const { createComment } = require('../../db/dbQueries');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    text: "This is a sample comment"
  })
});

router.post('/', (req, res) => {
  createComment(req.body)
})

module.exports = router;

