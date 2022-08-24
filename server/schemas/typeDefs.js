const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
        _id: ID
        username: String
        email: String
        Dob: String
        favWorkout: String
        workouts: [Workout]
        foods: [Food]
        sleeps: [Sleep]
    }

    type Workout {
        _id: ID
        username: String
        workoutName: String
        description: String
        caloriesBurned: String
        exercises: String
    }

    type Sleep {
        _id: ID
        timeSlept: String
        sleepRating: String
        username: String
    }

    type Food {
        _id: ID
        caloriesEaten: String
        foodName: String
    }

    type Auth {
        token: ID!
        user: User
    }
    
    type Query {
        me: User
        users: [User]
        user(username: String!): User
        workout(_id: ID!): Workout
        workouts(username: String): [Workout]
        sleep(_id: ID!): Sleep
        sleeps(username: String!): [Sleep]
        food(_id: ID!): Food
        foods(username: String): [Food]
    }

    type Mutation {
        login(email: String!, password: String! ): Auth
        addUser(username: String!, email: String!, password: String!, Dob: String!, favWorkout: String! ): Auth
        addWorkout(workoutName: String!, description: String!, caloriesBurned: String!, exercises: String!): Workout
        updateUser(_id: ID!, username: String!, email: String!, password: String!, Dob: String!, favWorkout: String!): User
        deleteUser(_id:ID!): User!
        addFood(foodName: String!, caloriesEaten: String!): Food
        addSleep(timeSlept: String!, sleepRating: String!, username: String!): Sleep
    }
`;


module.exports = typeDefs;