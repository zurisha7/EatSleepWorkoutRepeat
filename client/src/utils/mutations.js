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



