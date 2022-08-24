import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            user {
                _id
                email
            }
        }
    }
`;

export const ADD_USER = gql`
    mutation addUser($username: String!, $email: String!, $password: String!, $Dob: String!, $FavWorkout: String!) {
        addUser(username: $username, email: $email, password: $password, Dob: $Dob, FavWorkout: $FavWorkout) {
            token
            user {
                _id
                username
            }
        }
    }
`;


export const ADD_WORKOUT = gql`
    mutation addWorkout($workoutName: String!, $description: String!, $caloriesBurned: String!, $exercises: String!) {
        addWorkout(workoutName: $workoutName, description: $description, caloriesBurned: caloriesBurned, exercises: $exercises){
            _id
            workoutName
            description
            caloriesBurned
            date
            exercises 

        }
    }
`;

export const ADD_SLEEP = gql`
    mutation addSleep($date: String, $timeSlept: String) {
        addSleep(date: $date, timeSlept: $timeSlept) {
            _id
            date
            timeSlept
        }
    }
`;
export const ADD_FOOD = gql`
    mutation addFood($date: String, $caloriesEaten: String) {
        addFood(date: $date, caloriesEaten: $caloriesEaten) {
            _id
            date
            caloriesEaten
        }
    }
`;