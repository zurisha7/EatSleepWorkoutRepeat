import React, { useState } from "react";
import workoutList from '../../components/workoutList';

import { useMutation } from '@apollo/client';
import { ADD_WORKOUT }  from '../../utils/mutations';
import { QUERY_ME, QUERY_WORKOUTS } from '../../utils/queries';

const Workout = () => {
    const [formState, setFormState ] = useState({workoutName: '', description: '', caloriesBurned: '', date: '', exercises: '', set: '', reps: '', weight: ''});

    
    const [addWorkout, { error }] = useMutation(ADD_WORKOUT, {
        update(cache, { data: { addWorkout }}){
            
            try {
                const { me } = cache.readQuery({ query: QUERY_ME });
                    cache.writeQuery({
                        query: QUERY_ME,
                        data: { me: { ...me, workouts: [...me.workouts, addWorkout ] }}
                    });
            } catch (err) {
                console.error(err);
            }

    const { workouts }= cache.readQuery({ query: QUERY_WORKOUTS });
            cache.writeQuery({
                query: QUERY_WORKOUTS, 
                data: { workouts: [addWorkout, ...workouts ]},
            });
        }
    });

    const handleChange = (event) => {
        const {name, value} = event.target;

        setFormState({
            ...formState,
            [name]: value
        });
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        try {
            const { data } = await addWorkout({
                variables: {...formState }
            });

        } catch (err) {
            console.error(err)
        }

        setFormState({
            name: '',
            description: '',
            caloriesBurned: '', 
            date: '',  
            exercises: '', 
            set: '', 
            reps: '', 
            weight: ''
        });
    };


    return (  
<form>  
<div className="container">    
  <div className="row">
    <div className="col-sm-4">
      <div className="panel panel-primary">
        <div className="panel-heading">WORKOUT</div>
        <label htmlFor="text" style={{padding: "10px"}}>  Workout Routine</label>
        <input type="text" id="lname" name="workoutRoutine" placeholder="Routine Name" value={formState.workoutName} onChange={handleChange} /><br /><br />
        <label htmlFor="text" style={{padding: "10px"}} >  Calories Burned:</label>
        <input type="text" id="lname" name="caloriesBurned" placeholder="Calories Burned" value={formState.caloriesBurned} onChange={handleChange} /><br/><br/>
        <label htmlFor="text" style={{padding: "10px"}}>Date: {date}</label>
        <input type="date" id="lname" name="date" placeholder="Date" defaultValue={date}/><br/><br/>
        <label htmlFor="text" style={{padding: "10px"}}>Set: {set}</label>
        <input type="text" id="lname" name="lname"/><br/><br/>
        <label htmlFor="text" style={{padding: "10px"}}>Reps:{reps}</label>
        <input type="text" id="lname" name="lname"/><br/><br/>
        <label htmlFor="text" style={{padding: "10px"}}>Weight:{weight}</label>
        <input type="text" id="lname" name="lname"/><br/><br/>
        <input type="submit" value="Submit" />
      </div>
    </div>
    <div className="col-sm-4"> 
      <div className="panel panel-primary">
        <div className="panel-heading">PREVIOUS WORKOUTS:</div>
        <p>{workoutList}</p>
        <div className="panel-footer"></div>
      </div>
    </div>
  </div>
</div>
</form>


    )

}

export default Workout;