import React, { useState } from "react";
//import WorkoutList from '../../components/workoutList';
 import { useMutation } from '@apollo/client';
 import { ADD_WORKOUT }  from '../../utils/mutations';
 import { QUERY_ME, QUERY_WORKOUTS } from '../../utils/queries';


  const Workout = (props) => {
 const [formState, setFormState ] = useState({workoutName: '', description: '', caloriesBurned: '', exercises: ''});

    
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

            addWorkout(data.addWorkout);
        } catch (err) {
            console.error(err)
        }

        setFormState({
            workoutName: '',
            description: '',
            caloriesBurned: '',  
            exercises: '', 
           
        });
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