import React, { useState } from 'react'
import sleep from '../../images/sleep.jpeg';
import { ADD_SLEEP } from '../../utils/mutations';
import { useMutation } from '@apollo/client';
import SleepList from '../workoutList';
// import { QUERY_USER, QUERY_SLEEP, QUERY_SLEEPS } from '../../utils/queries';


  const Sleep = (props) => {
    const [formState, setFormState] = useState({
      username: '',
      timeSlept: '',
      sleepRating: ''

  });
  const [addSleep, { error }] = useMutation(ADD_SLEEP);

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
          await addSleep({
              variables: { ...formState },
          });

  
      } catch (e) {
          console.error(e);
      }
   
      
  setFormState({
    username: '',
    timeSlept: '',
    sleepRating: ''
  })
  };

  
return (
 <section>  
<form className="container" onSubmit={handleFormSubmit}>
  <div className="row">
    <div className="col-sm-4">
      <div className="panel panel-primary">
        <div className="panel-heading">SLEEP</div>
        <label htmlFor="text" style={{padding: "10px"}}>Username:</label>
        <input type="text" id="lname" name="username" placeholder="Username" value={formState.username} onChange={handleChange} /><br/><br/>
        <label htmlFor="text" style={{padding: "10px"}}>Hours Slept:</label>
        <input type="text" id="lname" name="timeSlept" placeholder="Time Slept" value={formState.timeSlept} onChange={handleChange} /><br/><br/>
        <label htmlFor="text" style={{padding: "10px"}}>Sleep Rating:</label>
        <input type="text" id="lname" name="sleepRating" placeholder="Sleep Rating" value={formState.sleepRating} onChange={handleChange} /><br/><br/>
        <input type="submit" value="Submit" />
      </div>
    </div>
  </div>
</form>
{error && <div>ERROR</div>}
    <div className="col-sm-4">
      <div className="panel panel-primary">
        <div className="panel-heading">PREVIOUS SLEEP</div>
          <title>Previous Sleep</title>
<div className="container mt-3">
<h2>Sleep</h2>
<div className="card img-fluid" style={{width:"500px"}}>
  <img className="card-img-top" src={sleep} alt="sleep" style={{width: "50%", opacity: "0.5"}} />
  <div className="card-img-overlay">
    <p className="card-title">Hours Slept:{sleep.timeSlept}</p>
    <SleepList />
    <p className="card-text">Sleep Rating:{sleep.sleepRating}</p>
    {/* <a href="#" className="btn btn-primary">Edit Sleep</a> */}
  </div>
</div>
</div>
</div>
</div> 
</section>
)
}

export default Sleep;