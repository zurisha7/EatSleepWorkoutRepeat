import React from 'react';
//import { Link } from 'react-router-dom';


const WorkoutList = ({ workouts }) => {
  if (!workouts) {
    return <h3>No Workouts Logged</h3>;
  }

  return (
    <div>
      <h3>workouts</h3>
      {workouts &&
        workouts.map((workout => (
          <div key={workout._id} className="card mb-3">
            {workout.workoutName}
            {workout.description}
            {workout.caloriesBurned}
            {workout.exercises}
            </div>
        )))}
    </div>
  );
};

export default WorkoutList;

 


