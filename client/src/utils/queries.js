import { gql } from '@apollo/client';

export const QUERY_WORKOUTS = gql`
    query workouts($username: String!) {
        workouts(username: $username) {
            _id
            username
            workoutName
            description
            caloriesBurned
            exercises 
        }
    }
`
export const QUERY_WORKOUT = gql`
    query workout($id: ID!) {
        workout(_id: $id) {
            _id
            username
            workoutName
            description
            caloriesBurned
            exercises 
        }
    }
`

export const QUERY_EATS = gql`
    query eats($username: String) {
        eats(username: $username) {
            _id
            username
            foodName
            caloriesEaten
        }
    }
`

export const QUERY_EAT = gql`
    query eat($id: ID!) {
        eat(_id: $id) {
            _id
            username
            foodName
            caloriesEaten
        }
    }
`

export const QUERY_USER = gql`
    query user($id: ID!) {
        user(_id: $id) {
            _id
            password
            Dob
            username
            email
            favWorkout
            workouts  {
                workoutName
            }               
            }
        }
`
export const QUERY_ME = gql`
{
    me {
        _id
        username
        password
        email
        Dob
        favWorkout
        workouts {
            workoutName
        }
    }
}
`
export const QUERY_ME_BASIC = gql`
{
    me {
    _id
    username
    email
    favWorkout
    }
}
`

