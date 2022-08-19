import React, { useState } from "react";
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../../utils/mutations';
import Auth from '../../utils/auth';

const Login = () => {
    const [formState, setFormState] = useState({ email: '', password: '' });
    const [login, {error }] = useMutation(LOGIN_USER);

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
            const { data } = await login({
                variables: {...formState}
            });
            
            Auth.login(data.login.token)
        } catch (err) {
            console.error(err);
        }
    };


    return (
    <div>
        <form onSubmit={handleFormSubmit}>
            <input
            placeholder='Email'
            name='email'
            type='email'
            id='email'
            value={formState.email}
            onChange={handleChange}
            />
            <input 
            placeholder='Password'
            name='password'
            type='password'
            id='password'
            value={formState.password}
            onChange={handleChange}
            />
            
            <button type='submit'>Submit</button>

       

        </form>

        {error && <div>Login Failed!</div>}
    </div>
        
    );
};

export default Login;