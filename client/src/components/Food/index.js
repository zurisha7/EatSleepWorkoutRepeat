import React from 'react';
import FoodList from '../FoodList';
import FoodForm from '../FoodForm';

import Auth from '../../utils/auth';
import { useQuery } from '@apollo/client';
import { QUERY_FOODS } from '../../utils/queries';

const Food = () => {
  const { loading, data } = useQuery(QUERY_FOODS);
  const foods = data?.foods || [];
  const loggedIn = Auth.loggedIn();

  return (
    <main>
      <div className="flex-row justify-space-between">
        {loggedIn && (
          <div className="col-12 mb-3">
            <FoodForm />
          </div>
        )}
        <div className={`col-12 mb-3 ${loggedIn && 'col-lg-8'}`}>
          {loading ? (
            <div>Loading...</div>
          ) : (
            <FoodList
              foods={foods}
              title="Foods"
            />
          )}
        </div>
      </div>
    </main>
  );
};

export default Food;