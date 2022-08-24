import React, { useState } from 'react'
import sleep from '../../images/sleep.jpeg';
import { ADD_SLEEP } from '../../utils/mutations';
import { useMutation } from '@apollo/client';
import { QUERY_ME, QUERY_SLEEP, QUERY_SLEEPS } from '../../utils/queries';


  const Sleep = (props) => {
    const [formState, setFormState ] = useState({date: '', timeSlept: '' });
   
       
    const [addSleep, { error }] = useMutation(ADD_SLEEP, {
        update(cache, { data: { addSleep}}){
               
           try {
                   const { me } = cache.readQuery({ query: QUERY_ME });
                       cache.writeQuery({
                           query: QUERY_ME,
                           data: { me: { ...me, sleeps: [...me.sleeps, addSleep ] }}
                       });
               } catch (err) {
                   console.error(err);
               }
   
       const { workouts }= cache.readQuery({ query: QUERY_SLEEP });
               cache.writeQuery({
                   query: QUERY_SLEEPS, 
                   data: { workouts: [addSleep, ...workouts ]},
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
               const { data } = await addSleep({
                   variables: {...formState }
               });
   
               addSleep(data.addSleep);
           } catch (err) {
               console.error(err)
           }
   
           setFormState({
               date: '',
               timeSlept: ''
           });
       };
return (
 <section>  
<form className="container" onSubmit={handleFormSubmit}>
  <div className="row">
    <div className="col-sm-4">
      <div className="panel panel-primary">
        <div className="panel-heading">SLEEP</div>
        <label htmlFor="text" style={{padding: "10px"}}>Hours Slept:</label>
        <input type="text" id="lname" name="timeSlept" placeholder="Time Slept" value={formState.timeSlept} onChange={handleChange} /><br/><br/>
        <label htmlFor="text" style={{padding: "10px"}}>Date:</label>
        <input type="date" id="lname" name="date" placeholder="Date of Sleep" value={formState.date} onChange={handleChange} /><br/><br/>
        <input type="submit" value="Submit" />
      </div>
    </div>
  </div>
</form>
{error && <div></div>}
    <div className="col-sm-4">
      <div className="panel panel-primary">
        <div className="panel-heading">PREVIOUS SLEEP</div>
          <title>Previous Sleep</title>
<div className="container mt-3">
<h2>Sleep</h2>
<div className="card img-fluid" style={{width:"500px"}}>
  <img className="card-img-top" src={sleep} alt="sleep" style={{width: "85%", opacity: "0.5"}} />
  <div className="card-img-overlay">
    <h4 className="card-title">Hours Slept</h4>
    <p className="card-text">Date</p>
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