import { gql } from '@apollo/client';

export const QUERY_WORKOUTS = gql`
    query workouts($username: String) {
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

export const QUERY_FOODS = gql`
    query foods($username: String) {
        foods(username: $username) {
            _id
            username
            foodName
            caloriesEaten
        }
    }
`

export const QUERY_FOOD = gql`
    query food($id: ID!) {
        food(_id: $id) {
            _id
            username
            foodName
            caloriesEaten
        }
    }
`

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      Dob
      FavWorkout
      sleeps {
        _id
        timeSlept
        sleepRating
        username
        createdAt
      }
      foods {
        _id
        username
        foodName
        caloriesEaten
      }
    }
  }
`;

export const QUERY_ME = gql`
{
  me {
    _id
    username
    email
    Dob
    FavWorkout
    sleeps {
      _id
      timeSlept
      sleepRating
      username
      createdAt
    }
  }
}

`;

export const QUERY_ME_BASIC = gql`
{
    me {
      _id
      username
      email
      Dob
      FavWorkout
    }
  }
`;

export const QUERY_SLEEP = gql`
query sleep($id: ID!) {
  sleep(_id: $id) {
        _id
        timeSlept
        sleepRating
        username
        createdAt
  }
}
`;

export const QUERY_SLEEPS = gql`
query sleeps($username: String) {
    sleeps(username: $username){
      _id
        timeSlept
        sleepRating
        username
        createdAt 
    }
}
`;
