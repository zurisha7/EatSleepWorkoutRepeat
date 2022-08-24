import React, { useState } from 'react';

import { useMutation } from '@apollo/client';
import { ADD_SLEEP } from '../../utils/mutations';
import { QUERY_SLEEPS } from '../../utils/queries';

const SleepForm = () => {
    const [formState, setFormState] = useState({ timeSlept: '', sleepRating: '' });

    const [addSleep] = useMutation(ADD_SLEEP, {
        update(cache, { data: { addSleep } }) {
            // read what's currently in the cache
            const { sleeps } = cache.readQuery({ query: QUERY_SLEEPS });

            // prepend the newest thought to the front of the array
            cache.writeQuery({
                query: QUERY_SLEEPS,
                data: { sleeps: [addSleep, ...sleeps] }
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
            await addSleep({
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
                    name="timeSlept"
                    type="timeSlept"
                    id="timeSlept"
                    value={formState.timeSlept}
                    onChange={handleChange}
                />
                <input
                    className="form-input"
                    placeholder="Sleep Rating"
                    name="sleepRating"
                    type="sleepRating"
                    id="sleepRating"
                    value={formState.sleepRating}
                    onChange={handleChange}
                />
                <button className="btn col-12 col-md-3" type="submit">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default SleepForm;