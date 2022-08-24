const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
        _id: ID
        username: String
        email: String
        Dob: String
        FavWorkout: String
        sleeps: [Sleep]
        workouts: [Workout]
        foods: [Food]

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
        createdAt: String
    }

    type Food {
        _id: ID
        caloriesEaten: String
        username: String
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
        sleeps(username: String): [Sleep]
        sleep(_id: ID!) : Sleep
        workout(_id: ID!): Workout
        workouts(username: String): [Workout]
        food(_id: ID!): Food
        foods(username: String): [Food]
    }

    type Mutation {
        login(email: String!, password: String! ): Auth
        addUser(username: String!, email: String!, password: String!, Dob: String!, FavWorkout: String! ): Auth
        addWorkout(workoutName: String!, description: String!, caloriesBurned: String!, exercises: String!): Workout
        updateUser(_id: ID!, username: String!, email: String!, password: String!, Dob: String!, FavWorkout: String!): User
        deleteUser(_id:ID!): User!
        addSleep(timeSlept: String!, sleepRating: String!): Sleep
        addFood(foodName: String!, caloriesEaten: String!): Food

    }
`;


module.exports = typeDefs;