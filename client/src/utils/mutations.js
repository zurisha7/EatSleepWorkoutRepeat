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
    mutation addUser($username: String!, $email: String!, $password: String!) {
        addUser(username: $username, email: $email, password: $password) {
            token
            user {
                _id
                username
                email
                password
            }
        }
    }
`

export const ADD_SLEEP = gql`
    mutation addSleep($timeSlept: String!, $sleepRating: String!) {
        addSleep(timeSlept: $timeSlept, sleepRating: $sleepRating) {
            sleep {
                _id
                timeSlept
                sleepRating
                username
                createdAt
            }
        }
    }
`

