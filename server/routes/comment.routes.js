import express from 'express'
import commentCtrl from '../controllers/comment.controller';
import authCtrl from '../controllers/auth.controller'

const router = express.Router()

router.route('/api/comment')
  .get(commentCtrl.list)       //List all newsfeeds.
  .post(authCtrl.requireSignin, commentCtrl.create)    //Create a newsfeed

router.route('/api/comment/:commentid')
  .get(authCtrl.requireSignin, commentCtrl.read)   // Get newsfeed by newsfeedID.
  .delete(authCtrl.requireSignin, authCtrl.hasAuthorization, commentCtrl.remove)   //Delete a particular newsfeed, user will get this option only if it is his newsfeed.

router.param('commentid', commentCtrl.commentByID)   

router.route('/api/commentsInNewsfeed/:newsfeedId')
    .get(commentCtrl.readforNewsfeed)     // Get all newsfeeds using the userID.

router.param('newsfeedId', commentCtrl.commentsByNewsfeedID)

export default router
