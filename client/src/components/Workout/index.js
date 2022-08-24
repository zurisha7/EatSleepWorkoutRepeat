import React, { useState } from "react";
//import WorkoutList from '../../components/workoutList';
 import { useMutation } from '@apollo/client';
 import { ADD_WORKOUT }  from '../../utils/mutations';
// import { QUERY_ME, QUERY_WORKOUTS } from '../../utils/queries';
 


 const Workout= () => {
    const [formState, setFormState] = useState({
        workoutName: '',
        description: '',
        caloriesBurned: '',
        exercises: '',
        
    });
    const [addWorkout, { error }] = useMutation(ADD_WORKOUT);

    // update state based on form input changes
    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormState({
            ...formState,
            [name]: value,
        });
    };

    // submit form
    const handleFormSubmit = async (event) => {
        event.preventDefault();

        try {
            await addWorkout({
                variables: { ...formState },
            });

    
        } catch (e) {
            console.error(e);
        }
    };

    return (  
<section>
<form onSubmit={handleFormSubmit}> 
 <div className="container">    
 <div className="row">
    <div className="col-sm-4">
      <div className="panel panel-primary">
        <div className="panel-heading">WORKOUT</div>
        <label htmlFor="text" style={{padding: "10px"}}>  Workout Name: </label>
        <input type="text" id="lname" name="workoutName" placeholder="Workout Name" value={formState.workoutName} onChange={handleChange} /><br /><br />
        <label htmlFor="text" style={{padding: "10px"}} >  Calories Burned:</label>
        <input type="text" id="lname" name="caloriesBurned" placeholder="Calories Burned" value={formState.caloriesBurned} onChange={handleChange} /><br/><br/>
        <label htmlFor="text" style={{padding: "10px"}}>Description of workout:</label>
        <input type="text" id="lname" name="description" placeholder="Description" value={formState.description} onChange={handleChange}/><br/><br/>
        <label htmlFor="text" style={{padding: "10px"}}>Exercise:</label>
        <input type="text" id="lname" name="exercises" placeholder="Exercise" value={formState.exercises} onChange={handleChange}/><br/><br/>
        <input type="submit" value="Submit" />
      </div>
    </div>
    <div className="col-sm-4"> 
      <div className="panel panel-primary">
        <div className="panel-heading">PREVIOUS WORKOUTS:</div>
       <p>{formState.caloriesBurned}{formState.description}{formState.workoutName}{formState.exercises}</p>
       
       </div>
    </div>
 </div>
 </div>
</form> 
{error && <div> Error adding workout </div>}
</section>

    )

};

export default Workout;