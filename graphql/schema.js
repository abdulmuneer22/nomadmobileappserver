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

type City {
    _id : ID!
    image: String,
    name: String,
    air_quality_now: Float,
    air_quality: Float,
    latitude: String,
    longitude: String,
    country: String,
    state_code: String,
    state: String,
    internet_speed: Float,
    air_quality_score: Float,
    rank: Float,
    temperatureC: Float,
    temperatureF: Float,
    internet_score: Float,
    leisure_quality: Float,
    safety_level: Float,
}

type Query {
    searchAirport(name : String!) : [Airport]
    searchCities(name : String!) :[City]
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
