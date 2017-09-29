//import UserProxy from '../Proxies/UserProxy'
import User from '../models/UserModel'

export default {
    signup : (_,args) => User.create(args)
}