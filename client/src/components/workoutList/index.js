import React from 'react';
import workoutImg from '../../images/workout.jpeg';

const WorkoutList = ({ workouts, title }) => {
  if (!workouts.length) {
    return <h3>You havent eaten yet</h3>;
  }

  return (
    <div>
      <h3>{title}</h3>
      {workouts &&
        workouts.map(workout => (
          <div key={workout._id} className="card img-fluid" style={{ width: "500px" }}>
            <img className="card-img-top" src={workoutImg} alt="sleep" style={{ width: "85%", opacity: "0.5" }} />
            <div className="card-img-overlay">
              <h4 className="card-title">Time Slept {workout.workoutName}</h4>
              <p className="card-text">Sleep Rating {workout.description}</p>
              <p className="card-text">Sleep Rating {workout.caloriesBurned}</p>
              <p className="card-text">Sleep Rating {workout.exercises}</p>
              {/* <a href="#" className="btn btn-primary">Edit Sleep</a> */}
            </div>
          </div>
        ))}
    </div>
  );
};

export default WorkoutList;




