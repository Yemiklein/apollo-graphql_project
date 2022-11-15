const {gql} = require('apollo-server');




const typeDefs = gql`
    type User {
        id: ID!
    name: String!
    username: String!
    age: Int!
    nationality: Nationality!
    friends: [User]
    favoriteMovies: [Movie]
    }

    type Movie {
        id: ID!
        title: String!
        year: Int!
        rating: Float!
        isInTheaters: Boolean!
        }

    type Query {
    users: [User!]!
    user(id:ID!):User!
    movies: [Movie!]!
    movie(title:String!):Movie!
    }

input CreateUserInput {
    name: String!
    username: String!
    age: Int!
    nationality: Nationality = NIGERIA
}

input UpdateUsernameInput {
     id: ID!
    newUsername: String!
  
    }



type Mutation {
createUser(input: CreateUserInput!): User
updateUsername(input: UpdateUsernameInput!):User
deleteUser(id:ID!):User
}

   enum Nationality {
    AMERICAN
    BRITISH
    NIGERIAN
    CANADIAN

   }
`;

module.exports = {typeDefs};