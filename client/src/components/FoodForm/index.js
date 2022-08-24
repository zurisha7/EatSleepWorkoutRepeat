import React, { useState } from 'react';

import { useMutation } from '@apollo/client';
import { ADD_FOOD } from '../../utils/mutations';
import { QUERY_FOODS } from '../../utils/queries';

const FoodForm = () => {
    const [formState, setFormState] = useState({ foodName: '', caloriesEaten: '' });

    const [addFood] = useMutation(ADD_FOOD, {
        update(cache, { data: { addFood } }) {
            // read what's currently in the cache
            const { foods } = cache.readQuery({ query: QUERY_FOODS });

            // prepend the newest thought to the front of the array
            cache.writeQuery({
                query: QUERY_FOODS,
                data: { foods: [addFood, ...foods] }
            });
        }
    });

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
            await addFood({
                variables: { ...formState },
            });


        } catch (e) {
            console.error(e);
        }
    };

    return (
        <div>
            <form
                className="flex-row justify-center justify-space-between-md align-stretch"
                onSubmit={handleFormSubmit}
            >
                <input
                    className="form-input"
                    placeholder="Time Slept"
                    name="foodName"
                    type="foodName"
                    id="foodName"
                    value={formState.foodName}
                    onChange={handleChange}
                />
                <input
                    className="form-input"
                    placeholder="Sleep Rating"
                    name="caloriesEaten"
                    type="caloriesEaten"
                    id="caloriesEaten"
                    value={formState.caloriesEaten}
                    onChange={handleChange}
                />
                <button className="btn col-12 col-md-3" type="submit">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default FoodForm;