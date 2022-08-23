const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        username: String
        email: String
        Dob: String
        FavWorkout: String
    }

    type Auth {
        token: ID!
        user: User
    }
    
    type Query {
        me: User
        users: [User]
        user(username: String!): User
    }

    type Mutation {
        login(email: String!, password: String! ): Auth
        addUser(username: String!, email: String!, password: String!, Dob: String!, FavWorkout: String!): Auth
        updateUser(_id: ID!, username: String, email: String, password: String, Dob: String!, FavWorkout: String!): User!
        deleteUser(_id:ID!): User!
    }
`;


module.exports = typeDefs;
