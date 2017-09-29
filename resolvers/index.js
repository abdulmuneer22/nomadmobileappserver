import UserResolvers from './UserResolvers'

export default {
    Query : {
        getAllUsers : async () => {
            return "All Users"
        }
    },
    Mutations : {
        signup : UserResolvers.signup
    }
}