//graphql schema


export default `
type User {
    _id: ID!,
    username: String!,
    firstName : String!,
    lastName: String!,
    email: String!
}


type Post {
    _id : ID!,
    user : User!,
    text : String!
    createdAt : String
    createdAt : String
}


type Query {
    getAllUsers : [User],
    getAllPosts : [Post]
}

type Mutations {
    signup(
        username: String!,
        firstName : String!,
        lastName: String!,
        email: String!,
        password : String!
    ) : User,

    createPost(text : String! , user : ID!) : Post,

    signin(
        username: String!,
        password : String
    ) : String

}

schema {
    query : Query
    mutation: Mutations
}



`;