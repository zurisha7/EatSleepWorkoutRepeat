
import React from 'react';
import { Link } from 'react-router-dom'

 import eat from '../../images/eat.jpeg';
 import sleep from '../../images/sleep.jpeg';
 import workout from '../../images/workout.jpeg';

import { QUERY_ME_BASIC } from '../../utils/queries';
import { useQuery } from '@apollo/client';




const Home = (props) => {

 const { loading, error, data } = useQuery(QUERY_ME_BASIC);

 if(loading) return 'Loading...';
 if (error) return `error! ${error.message}`;

   return (
    <section>
    <div className="container">
    <div className="row">
      <div className="col-sm-3">
        <div className="panel panel-primary">
          {/* <div className="panel-heading">{data.username}</div> */}
          {/* <div className="panel-body"><img src={avatar} class="img-responsive" alt="avatar" /></div> */}
          <div className="panel-footer">Email Address:{data.email}</div>
          <p style={{padding: "5px"}}>Favorite Workout:{data.favWorkout}</p>
        </div>
      </div>
    <div className="row">
      <div className="col-sm-3">
        <div className="panel panel-primary">
          <div className="panel-heading">EAT</div>
          <div className="panel-body"><img src={eat} className="img-responsive" alt="Food" /></div>
          <div className="panel-footer">How many calories did you eat?</div>
          <input type="submit" value="Submit" />
        </div>
      </div>
      <div className="col-sm-3">
        <div className="panel panel-primary">
          <div className="panel-heading">SLEEP</div>
          <div className="panel-body"><img src={sleep} className="img-responsive" alt="Sleep" /></div>
          <div className="panel-footer">What was your sleep rating?</div>
          <button className="submit"><Link to='/Sleep' /></button>
        </div>
      </div>
      <div className="col-sm-3">
        <div className="panel panel-primary">
          <div className="panel-heading">WORKOUT</div>
          <div className="panel-body"><img src={workout} className="img-responsive" alt="Workout" /></div>
          <div className="panel-footer">How many calories did you burn?</div>
          <input type="submit" value="Submit" />
        </div>
      </div>
    </div>
    </div>
  </div><br />
  </section>

  
  );
};
export default Home;