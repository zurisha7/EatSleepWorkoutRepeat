import React from 'react';
//import { Link } from 'react-router-dom';


const WorkoutList = ({ workouts }) => {
  if (!workouts) {
    return <h3>No Workouts Logged</h3>;
  }

  return (


     <div className="col-sm-4"> 
      <div className="panel panel-primary">
        <div className="panel-heading">PREVIOUS WORKOUTS:</div> 
                <div>
            <h3>workouts</h3>
        {workouts &&
        workouts.map((workout => (
        <div key={workout._id} className="card mb-3">
         <p>Workout Name:{workout.workoutName}</p>
         <p>Description: {workout.description}</p>
         <p>Calories Burned: {workout.caloriesBurned}</p>
         <p>Exercises: {workout.exercises}</p>
      </div>
  )))}
</div>
{/* <WorkoutList workouts={workouts} /> */}
        </div>
     </div>
 
// </form> 
// {error && <div> Error adding workout </div>}
// </section>
    
  );
};

export default WorkoutList;

 


