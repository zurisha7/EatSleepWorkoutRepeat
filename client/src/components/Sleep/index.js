import React from 'react';
import SleepList from '../SleepList';
import SleepForm from '../SleepForm';

import Auth from '../../utils/auth';
import { useQuery } from '@apollo/client';
import { QUERY_SLEEPS } from '../../utils/queries';

const Sleep = () => {
  const { loading, data } = useQuery(QUERY_SLEEPS);
  const sleeps = data?.sleeps || [];
  const loggedIn = Auth.loggedIn();

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
