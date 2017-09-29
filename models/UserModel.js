//User Modal Schema
import {Schema} from 'mongoose'
import mongoose from 'mongoose'
const UserSchema = new Schema({
    userName : {
        type : String,
        unique : true
    },
    firstName : String,
    lastName : String,
    password : String,
    email : String
},{
    timestamps : true
});

const User = mongoose.model('User',UserSchema)

export default User
