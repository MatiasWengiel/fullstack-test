const express = require('express');
// const { commentsSchema } = require('../../db/schema');
const router = express.Router();

// const Comment = mongoose.model("Comment", commentsSchema)

router.get('/', (req, res) => {
  res.json({
    text: "This is a sample comment"
  })
});

router.post('/', (req, res) => {
  console.log(req.body)
})

module.exports = router;