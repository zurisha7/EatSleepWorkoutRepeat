import React from 'react';
import { Link } from 'react-router-dom'
import avatar from '../../images/avatar.png';
import eat from '../../images/eat.jpeg';
import sleep from '../../images/sleep.jpeg';
import workout from '../../images/workout.jpeg';


import { QUERY_ME_BASIC } from '../../utils/queries';

import { useQuery } from '@apollo/client';


const Home = (props) => {


  const { loading, error, data } = useQuery(QUERY_ME_BASIC);
  const me = data?.me || [];


  if (loading) return 'Loading...';
  if (error) return `error! ${error.message}`;

  return (
    <section className='center'>
      <div className="container ">
        <div className="row">
          <div className="col-sm-3">
            <div className="panel panel-primary">
              <div className="panel-heading">{me.username}</div>
              <div className="panel-body"><img src={avatar} className="img-responsive" alt="avatar" /></div>
              <div className="panel-footer">Email Address:{me.email}</div>
              <p style={{ padding: "5px" }}>Favorite Workout:{me.FavWorkout}</p>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-3">
              <div className="panel panel-primary">
                <div className="panel-heading">EAT</div>
                <div className="panel-body"><img src={eat} className="img-responsive" alt="Food" /></div>
                <Link to='/Food' className="panel-footer">How many calories did you eat?</Link>

              </div>
            </div>
            <div className="col-sm-3">
              <div className="panel panel-primary">
                <div className="panel-heading">SLEEP</div>
                <div className="panel-body"><img src={sleep} className="img-responsive" alt="Sleep" /></div>
                <Link to='/Sleep' className="panel-footer">What was your sleep rating?</Link>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="panel panel-primary">
                <div className="panel-heading">WORKOUT</div>
                <div className="panel-body"><img src={workout} className="img-responsive" alt="Workout" /></div>
                <Link to='/Workout' className="panel-footer">How many calories did you burn?</Link>
              </div>
            </div>
          </div>
        </div>
      </div><br />
    </section>
  );
};
export default Home;