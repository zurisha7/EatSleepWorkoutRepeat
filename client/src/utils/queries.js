import { gql } from '@apollo/client';

export const QUERY_USER = gql`  
    query user($username: String!) {
        user(username: $username) {
            _id
            username
            email
            workoutCount
            workouts {
                _id
                name
                description
                caloriesBurned
                date
                exercises: {
                    set
                    reps
                    weight
                }
            }

        }
    }
`

export const QUERY_ME = gql`
    {
        me{
            _id
            username
            email
            workoutCount
            workouts {
                _id
                name
                description
                caloriesBurned
                date
                exercises: {
                    set
                    reps
                    weight
                }

            }
        }
    }
`

export const QUERY_WORKOUTS =gql`
    query workouts($username: String) {
        workouts(username: $username) {
            _id
            name
            description
            caloriesBurned
            date
            exercises: {
                set
                reps
                weight
            }
        }
    }
`
    
    export const QUERY_WORKOUT = gql`
        query workout($id: ID!) {
            workout(_id: $id) {
                _id
                name
                description
                caloriesBurned
                date
                [exercises] 
            }
        }
    `;