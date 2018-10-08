import mongoose from 'mongoose';

const CommentSchema = new mongoose.Schema({
    commenter_email: {
        type: String,
        trime: true,
        required: "Sender Email is required"
    },
    content: {
        type: String,
        required: "Enter something",
        trim: true
    },
    created: {
        type: Date,
        default: Date.now
    },
    feed_id: {
        type: String,
        required: "Should have an associated Newsfeed",
    }
})

export default mongoose.model('Comment', CommentSchema)