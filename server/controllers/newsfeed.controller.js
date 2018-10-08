import Newsfeed from '../models/newsfeed.model';
import _ from 'lodash';
import errorHandler from './../helpers/dbErrorHandler';

const create = (req, res) => {
    const newsfeed = new Newsfeed(req.body);
    newsfeed.save((err, result) => {
        if(err){
            return res.status(400).json({ //BAD REQUEST
                error: errorHandler.getErrorMessage(err)
            })
        }
        res.status(200).json({
            message: "Added successfully!",
            newsfeed_id: result._id
        })
    })
};

const newsfeedByID = (req, res, next, id) => {
    Newsfeed.findById(id).exec((err, newsfeed) => {
        if(err || !newsfeed)
            return res.status(400).json({
                error: "Newsfeed not found."
            })
        req.newsfeed = newsfeed;
        next();
    })
}

const newsfeedsByUser = (req, res, next, useremail) => {
    Newsfeed.where('user_email' == useremail).find((err, newsfeeds) => {
        if(err || !newsfeeds){
            return res.status(400).json({
                error: "Newsfeeds not found for the user."
            });
        }
        req.newsfeeds = newsfeeds;
        next();
    })
}

const readUserNewsfeed = (req, res) => {
    return res.json(req.newsfeeds);
}

const read = (req, res) => {
    return res.json(req.newsfeed);
}
  
const list = (req, res) => {
    Newsfeed.find((err, newsfeeds) => {
        if (err) {
            return res.status(400).json({
                error: errorHandler.getErrorMessage(err)
            })
        }
        res.json(newsfeeds)
    }).select('user_email content upvotes comment_ids created')
}

const remove = (req, res) => {
    let newsf = req.newsfeed
    newsf.remove((err, deletedNewsfeed) => {
        if (err) {
        return res.status(400).json({
            error: errorHandler.getErrorMessage(err)
        })
        }
        res.json(deletedNewsfeed)
    })
}

export default {
    create,
    newsfeedByID,
    newsfeedsByUser,
    readUserNewsfeed,
    read,
    list,
    remove
}
