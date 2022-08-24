import React, { useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { ADD_SLEEP } from '../../utils/mutations'
import { QUERY_SLEEP } from '../../utils/queries';


const Sleep = () => {
    const { id: thoughtId } = Params();
    const { loading, data } = useQuery(QUERY_SLEEP, {
        variables: { id: sleepId },
    });

    const sleep = data?.sleep || {};

    if (loading) {
        return <div>Loading...</div>;
    }

    const [formState, setFormState] = useState({
        timeSlept: '',
        sleepRating: '',
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
    };

    return (
        <main className="flex-row justify-center mb-4">
            <div className="col-12 col-md-6">
                <div className="card">
                    <h4 className="card-header">Sign Up</h4>
                    <div className="card-body">
                        <form onSubmit={handleFormSubmit}>
                            <input
                                className="form-input"
                                placeholder="Your Time Slept"
                                name="timeSlept"
                                type="timeSlept"
                                id="timeSlept"
                                value={formState.timeSlept}
                                onChange={handleChange}
                            />
                            <input
                                className="form-input"
                                placeholder="Your Sleep Rating"
                                name="sleepRating"
                                type="sleepRating"
                                id="sleepRating"
                                value={formState.sleepRating}
                                onChange={handleChange}
                            />
                            <button className="btn d-block w-100" type="submit">
                                Submit
                            </button>
                        </form>

                        {error && <div>Signup failed</div>}
                    </div>
                </div>
            </div>
            <div className="card mb-3">
                <p className="card-header">
                    <span style={{ fontWeight: 700 }} className="text-light">
                        {thought.username}
                    </span>{' '}
                    thought on {thought.createdAt}
                </p>
                <div className="card-body">
                    <p>{thought.thoughtText}</p>
                </div>
            </div>

            {thought.reactionCount > 0 && (
                <ReactionList reactions={thought.reactions} />
            )}
        </div>
        </main >
    );
};

export default Sleep;

