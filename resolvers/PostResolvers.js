
import Post from '../models/PostsModel'

export default {
    createPost : (_,args) => Post.create(args),
    find : () => Post.find()
}