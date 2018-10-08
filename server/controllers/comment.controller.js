import Comment from '../models/comment.model'
import _ from 'lodash'
import errorHandler from './../helpers/dbErrorHandler'

const create = (req, res, next) => {
  const comment = new Comment(req.body)
  comment.save((err, result) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler.getErrorMessage(err)
      })
    }
    res.status(200).json({
      message: "Comment Successfully posted",
      comment_id: result._id
    })
  })
}

const commentByID = (req, res, next, id) => {
  Comment.findById(id).exec((err, comment) => {
    if (err || !comment)
      return res.status(400).json({
        error: "Comment not found"
      })
    req.comment = comment
    next()
  })
}

const commentsByNewsfeedID = (req, res ,next, newsfeedid) => {
  Comment.where('feed_id' == newsfeedid).find( (err, comments ) => {
    if(err || !comments){
      return res.status(400).json({
        error: "No comments found."
      })
    }
    req.comments = comments;
    next();
  })
}

const readforNewsfeed = (req, res) => {
  return res.json(req.comments);
}

const read = (req, res) => {
    return res.json(req.comment)
}

const list = (req, res) => {
  Comment.find((err, comments) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler.getErrorMessage(err)
      })
    }
    res.json(comments)
  }).select('content created')
}


const remove = (req, res, next) => {
  let comment = req.comment
  comment.remove((err, deletedComment) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler.getErrorMessage(err)
      })
    }
    res.json(deletedComment)
  })
}

export default {
  create,
  commentByID,
  readforNewsfeed,
  commentsByNewsfeedID,
  read,
  list,
  remove
}
