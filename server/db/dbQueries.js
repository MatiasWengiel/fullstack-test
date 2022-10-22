const Comment = require('./schema')

const createComment = (commentDetails) => {
  const comment = new Comment(commentDetails)
  return comment.save(function (err) {
    if (err) return handleError(err)
  })
}

module.exports = {
  createComment
}