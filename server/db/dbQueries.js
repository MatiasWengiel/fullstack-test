const Comment = require('./schema')

const getComments = async () => {

  try {
    const comments = await Comment.find()
    return comments
  } catch (error) {
    console.log(error)
  }
}

const createComment = (commentDetails) => {
  const comment = new Comment(commentDetails)
  return comment.save(function (err) {
    if (err) return handleError(err)
  })
}

module.exports = {
  getComments,
  createComment
}