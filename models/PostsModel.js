//User Modal Schema
import {Schema} from 'mongoose'
import mongoose from 'mongoose'
const PostSchema = new Schema({
    text : String,
    user : {
        type : Schema.Types.ObjectId,
        ref : 'User'
    }
},{
    timestamps : true
});

const Post = mongoose.model('Post',PostSchema)

export default Post
