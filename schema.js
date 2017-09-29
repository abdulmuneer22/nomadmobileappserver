//graphql schema


export default `

type User {
    _id: ID!,
    username: String,
    firstName : String!,
    lastName: String!,
    email: String!
}

type Query {
    getAllUsers : String
}

type Mutations {
    signup(username: String,firstName : String!,lastName: String!,email: String!) : User
}

schema {
    query : Query
    mutation: Mutations
}



`;