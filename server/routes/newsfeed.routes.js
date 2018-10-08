import express from 'express'
import newsfeedCtrl from '../controllers/newsfeed.controller';
import authCtrl from '../controllers/auth.controller'

const router = express.Router()

router.route('/api/newsfeed')
  .get(newsfeedCtrl.list)       //List all newsfeeds.
  .post(authCtrl.requireSignin, newsfeedCtrl.create)    //Create a newsfeed

router.route('/api/newsfeed/:newsfeedid')
  .get(authCtrl.requireSignin, newsfeedCtrl.read)   // Get newsfeed by newsfeedID.
  .delete(authCtrl.requireSignin, authCtrl.hasAuthorization, newsfeedCtrl.remove)   //Delete a particular newsfeed, user will get this option only if it is his newsfeed.

router.param('newsfeedid', newsfeedCtrl.newsfeedByID)   

router.route('/api/newsfeedbyuser/:userid')
    .get(newsfeedCtrl.readUserNewsfeed)     // Get all newsfeeds using the userID.

router.param('userid', newsfeedCtrl.newsfeedsByUser)

export default router
