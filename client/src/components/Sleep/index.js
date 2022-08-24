<<<<<<< HEAD
import React from 'react';
import SleepList from '../SleepList';
import SleepForm from '../SleepForm';
=======
import React, { useState } from 'react'
import sleep from '../../images/sleep.jpeg';
import { ADD_SLEEP } from '../../utils/mutations';
import { useMutation } from '@apollo/client';
import SleepList from '../workoutList';
// import { QUERY_USER, QUERY_SLEEP, QUERY_SLEEPS } from '../../utils/queries';
>>>>>>> 7f370fc2afb8731875f29154a52811dd2992c550

import Auth from '../../utils/auth';
import { useQuery } from '@apollo/client';
import { QUERY_SLEEPS } from '../../utils/queries';

<<<<<<< HEAD
const Sleep = () => {
    const { loading, data } = useQuery(QUERY_SLEEPS);
    const sleeps = data?.sleeps || [];
    const loggedIn = Auth.loggedIn();
=======
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
>>>>>>> 7f370fc2afb8731875f29154a52811dd2992c550

    return (
        <main>
            <div className="flex-row justify-space-between">
                {loggedIn && (
                    <div className="col-12 mb-3">
                        <SleepForm />
                    </div>
                )}
                <div className={`col-12 mb-3 ${loggedIn && 'col-lg-8'}`}>
                    {loading ? (
                        <div>Loading...</div>
                    ) : (
                        <SleepList
                            sleeps={sleeps}
                            title="Sleeps"
                        />
                    )}
                </div>
            </div>
        </main>
    );
};

export default Sleep;
