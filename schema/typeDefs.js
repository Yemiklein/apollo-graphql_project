const {gql} = require('apollo-server');




const typeDefs = gql`
    type User {
        id: ID!
    name: String!
    username: String!
    age: Int!
    nationality: Nationality!
    friends: [User]
    }

    type Movie {
        id: ID!
        title: String!
        year: Int!
        rating: Float!
        isInTheaters: Boolean!
        actors: [User]
        }

    type Query {
    users: [User!]!
    user(id:ID!):User!
    movies: [Movie!]!
    movie(title:String!):Movie!
    }

   enum Nationality {
    AMERICAN
    BRITISH
    NIGERIAN

   }
`;

module.exports = {typeDefs};