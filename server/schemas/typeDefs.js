const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        username: String
        email: String
        Dob: String
        FavWorkout: String
        sleeps: [Sleep]
    }

    type Sleep {
        _id: ID
        timeSlept: String
        sleepRating: String
        username: String
        createdAt: String
    }

    type Auth {
        token: ID!
        user: User
    }
    
    type Query {
        me: User
        users: [User]
        user(username: String!): User
        sleeps(username: String): [Sleep]
        sleep(_id: ID!) : Sleep
    }

    type Mutation {
        login(email: String!, password: String! ): Auth
        addUser(username: String!, email: String!, password: String!, Dob: String!, FavWorkout: String!): Auth
        updateUser(_id: ID!, username: String, email: String, password: String, Dob: String!, FavWorkout: String!): User!
        deleteUser(_id:ID!): User!
        addSleep(timeSlept: String!, sleepRating: String!): Sleep
    }
`;


module.exports = typeDefs;
