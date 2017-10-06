// graphql schema


export default `
type User {
    _id: ID!,
    username: String!,
    firstName : String!,
    lastName: String!,
    email: String!
}


type Airport {
    _id : ID!,
    iata: String,
    lon: String,
    iso: String,
    status: String,
    name: String,
    continent: String,
    type: String,
    lat: String,
    size: String
}


type Query {
    searchAirport(name : String!) : [Airport]
}



schema {
    query : Query
}



`;


// type Mutations {
//     signup(
//         username: String!,
//         firstName : String!,
//         lastName: String!,
//         email: String!,
//         password : String!
//     ) : User,

//     createPost(text : String! , user : ID!) : Post,

//     signin(
//         username: String!,
//         password : String
//     ) : String

//
