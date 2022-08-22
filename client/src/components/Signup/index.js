 import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../../utils/mutations';
import Auth from '../../utils/auth';

const Signup = () => {
    const [addUser, { error }] = useMutation(ADD_USER);
    const [formState, setFormState]= useState({ username: '', email: '', password:'', Dob: '', FavWorkout: '' });
    const { username, email, password, Dob, FavWorkout } = formState;
    

    const [status, setFormStatus] = useState('');

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormState({
        ...formState,
        [name]: value
      });
    };

const handleFormSubmit = async (event) => {
    event.preventDefault();
    setFormStatus('Signing up...')
    try {
        const { data } = await addUser({
            variables: { ...formState }
        });

        Auth.login(data.addUser.token);
        
    } catch(err) {
        console.error(err);
    }

    setFormStatus('Signed up!')
    window.location.assign('/');
};


    return (
        <section className="ftco-section">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-6 text-center mb-5">
                    <h2 className="heading-section">Signup</h2>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-lg-10 col-md-12">
                    <div className="wrapper">
                        <div className="row no-gutters">
                            <div className="col-md-7 d-flex align-items-stretch">
                                <div className="contact-wrap w-100 p-md-5 p-4">
                 
                                    <div id="form-message-warning" className="mb-4"></div> 
                              <div id="form-message-success" className="mb-4" >
                              </div>
                                    <form id="c" name="signupForm" onSubmit={handleFormSubmit}>
                                        <div className="row">
                                            <div className="col-md-6">
                                            <div className="form-group">
                                                <input type="text" className="form-control" name="username" id="username" placeholder="Username" defaultValue={username} onBlur={handleChange} />
                                            </div>
                                                <div className="form-group">
 
                                                    <input type="email" className="form-control" name="email" id="email" placeholder="email" defaultValue={email} onBlur={handleChange} />
                                                </div>
                                            </div>
                                            <div className="col-md-6"> 
                                                <div className="form-group">
                                                    <input type="password" className="form-control" name="password" id="password" placeholder="Password" defaultValue={password} onBlur={handleChange} />
                                                </div>
                                            </div>
                                            <div className="col-md-6"> 
                                                <div className="form-group">
                                                    <input type="date" className="form-control" name="Dob" id="Dob" placeholder="Birthday" defaultValue={Dob} onBlur={handleChange} />
                                                </div>
                                            </div>
                                            <div className="col-md-6"> 
                                                <div className="form-group">
                                                    <input type="text" className="form-control" name="FavWorkout" id="FavWorkout" placeholder="Favorite Workout" defaultValue={FavWorkout} onBlur={handleChange} />
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <input type="submit"  className="btn btn-primary"/>
                                                    <div className="submitting">{status}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div> 
                            {error && (<div>
                                 <p className="errorMessage">{error}</p> </div>
                                    )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         </div>
     </section>
    );
};

export default Signup;