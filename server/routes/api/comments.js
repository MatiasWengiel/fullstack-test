const express = require('express');
const { createComment, getComments } = require('../../db/dbQueries');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const comments = await getComments()
    res.json(comments)
  } catch (error) {
    console.log(error)
  }

});

router.post('/', (req, res) => {
  createComment(req.body)
})

module.exports = router;

