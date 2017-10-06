//User Modal Schema
import {Schema} from 'mongoose'
import mongoose from 'mongoose'
import { hashSync, compareSync } from 'bcrypt-nodejs';
const UserSchema = new Schema({
    username : {
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


UserSchema.pre('save',function(next){
    if(this.isModified('password')){
        this.password = this._hashPassword(this.password)
    }
    return next()
})


UserSchema.methods._hashPassword = function(password) {
    return hashSync(password)
};

UserSchema.methods.authenticateUser = function(password){
    return compareSync(password,this.password)
}



const User = mongoose.model('User',UserSchema)

export default User
