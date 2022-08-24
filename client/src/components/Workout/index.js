import React from "react";
import WorkoutForm from "../WorkoutForm";
//import WorkoutList from '../../components/workoutList';
 import {  useQuery } from '@apollo/client';
//  import { ADD_WORKOUT }  from '../../utils/mutations';
 import { QUERY_WORKOUTS } from '../../utils/queries'
 import WorkoutList from "../workoutList";
 import Auth from '../../utils/auth';


 const Workout= () => {
    const { loading, data } = useQuery(QUERY_WORKOUTS);
    const workouts = data?.sleeps || [];

    const loggedIn = Auth.loggedIn();

    return (
        <main>
            <div className="flex-row justify-space-between">
                {loggedIn && (
                    <div className="col-12 mb-3">
                        <WorkoutForm />
                    </div>
                )}
                <div className={`col-12 mb-3 ${loggedIn && 'col-lg-8'}`}>
                    {loading ? (
                        <div>Loading...</div>
                    ) : (
                        <WorkoutList
                            workouts={workouts}
                            title="Workout"
                        />
                    )}
                </div>
            </div>
        </main>



    )

};

export default Workout;