import React from 'react';
import WorkoutList from '../WorkoutList';
import WorkoutForm from '../WorkoutForm';

import Auth from '../../utils/auth';
import { useQuery } from '@apollo/client';
import { QUERY_WORKOUTS } from '../../utils/queries';

const Workout = () => {
    const { loading, data } = useQuery(QUERY_WORKOUTS);
    const workouts = data?.workouts || [];
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
                            title="Workouts"
                        />
                    )}
                </div>
            </div>
        </main>
    );
};

export default Workout;