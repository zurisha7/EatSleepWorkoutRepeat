import React from 'react';
//import { Link } from 'react-router-dom'

const WorkoutList = ({ workouts, date}) => {
    // if(!workouts.length) {
    //     return <p>No workouts yet!</p>
    // }

    return(
      <div>
    {/* {workouts && 
        workouts.map(workout => (
            <div key={workout._id} className="card mb-3">
            <p className="card-header">  
            <Link to ={`/workout/${workout.username}`}
            style={{ fontweight: 500 }} className = "text-bold">
                {workout.username}
            </Link>{''}
            </p>
            workout completed on {date}
        </div>

        )) } */}
             
        </div>    
        
    )
};

export default WorkoutList;

