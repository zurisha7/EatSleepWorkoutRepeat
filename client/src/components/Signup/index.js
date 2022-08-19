 import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../../utils/mutations';
import Auth from '../../utils/auth';

const Signup = () => {
    const [addUser, { error }] = useMutation(ADD_USER);
    const [formState, setFormState]= useState({ username: '', email: '', password:'' });
    

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormState({
        ...formState,
        [name]: value
      });
    };

const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
        const { data } = await addUser({
            variables: { ...formState }
        });
        Auth.login(data.addUser.token);
    } catch(err) {
        console.error(err);
    }
};


    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <input
                placeholder='Username'
                name='username'
                type='username'
                id='username'
                value={formState.username}
                OnChange={handleChange}
                />
                <input
                placeholder='email'
                name='email'
                type='email'
                id='email'
                value={formState.email}
                onChange={handleChange}
                />
                <input
                placeholder='password'
                name='password'
                type='password'
                id='password'
                value={formState.password}
                onChange={handleChange}
                />
                <button type='submit'>Submit</button>

            </form>
            {error && <div>Sign up failed</div>}
        </div>
    );
};

export default Signup;