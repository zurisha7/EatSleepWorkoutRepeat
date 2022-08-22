import React from 'react';

const workoutList = ({ workoutCount, username, workouts}) => {
    if(!workoutCount || !workouts.length) {
        return <p>{username}No workouts yet!</p>
    }

    return(
      <div>
            <h3> 
               {workoutCount} {workoutCount === 1 ? 'workout' : 'workouts'}
            </h3>
        </div>
    )
};

export default workoutList;

