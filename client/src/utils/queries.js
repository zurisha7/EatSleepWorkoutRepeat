import { gql } from '@apollo/client';

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
    }
  }

`;

export const QUERY_SLEEP = gql`
  {
    sleep {
        _id
        timeSlept
        sleepRating
        username
        createdAt
    }
  }
`;

export const QUERY_SLEEPS = gql`
query sleeps{$username:String) {
    sleeps(username:$username){
        _id
        timeSlept
        sleepRating
        username
        createdAt 
    }
}
`;
