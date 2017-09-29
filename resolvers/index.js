import UserResolvers from './UserResolvers'
import PostResolvers from './PostResolvers'
import Users from '../models/UserModel'


export default {
    Post : {
        user : ({user}) => Users.findById(user)
    },

    Query : {
        getAllUsers : () => UserResolvers.find(),
        getAllPosts : () => PostResolvers.find()
    },
    Mutations : {
        signup : UserResolvers.signup,
        signin : UserResolvers.signin,
        createPost : PostResolvers.createPost
    }
}