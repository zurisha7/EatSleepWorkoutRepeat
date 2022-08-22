import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
    mutation login($email: String, $password: String) {
        login(email: $email, password: $password) {
            token
            user {
                _id
                email
                password
                
            }
        }
    }
`
export const ADD_USER = gql`
    mutation addUser($username: String!, $email: String!, $password: String!, $Dob: String!, $FavWorkout: String) {
        addUser(username: $username, email: $email, password: $password, Dob: $Dob, FavWorkout: $FavWorkout) {
            token
            user {
                _id
                username
                email
                password
                Dob
                FavWorkout
            }
        }
    }
`
export const ADD_WORKOUT =gql`
    mutation addWorkout($name: String, $description: String, $caloriesBurned: Int, $date: String, $workoutName: String, $workoutRoutine: String, $set: Int, $reps: Int, $weight: Int) {
        addWorkout(name: $name, description: $description, caloriesBurned: $caloriesBurned, date: $date, workoutName: $workoutName, workoutRoutine: $workoutRoutine, set: $set, reps: $reps, weight: $weight) {
            workout {
                _id
                name
                description
                caloriesBurned
                date
                exercises {
                    set
                    reps
                    weight
                }             

            }

        }

    }
`
