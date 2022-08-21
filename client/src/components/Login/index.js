import React, { useState } from "react";
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../../utils/mutations';
import Auth from '../../utils/auth';

const Login = () => {
    const [formState, setFormState] = useState({ email: '', password: '' });
    const [login, {error }] = useMutation(LOGIN_USER);

    const [status, setStatus] = useState('');
    const { email, password } = formState;

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormState({
            ...formState,
            [name]: value
        });
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        setStatus('Logging in...')

        try {
            const { data } = await login({
                variables: {...formState}
            });
            
            Auth.login(data.login.token)
        } catch (err) {
            console.error(err);
        }
        setStatus('Submit');
    };


    return (
                
    <section className="ftco-section">
       <div className="container">
           <div className="row justify-content-center">
               <div className="col-md-6 text-center mb-5">
                   <h2 className="heading-section">Login</h2>
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
                                   <form id="c" name="loginForm" onSubmit={handleFormSubmit}>
                                       <div className="row">
                                           <div className="col-md-6">
                                               <div className="form-group">

                                                   <input type="text" className="form-control" name="email" id="email" placeholder="email" defaultValue={email} onBlur={handleChange} />
                                               </div>
                                           </div>
                                           <div className="col-md-6"> 
                                               <div className="form-group">
                                                   <input type="email" className="form-control" name="password" id="password" placeholder="password" defaultValue={password} onBlur={handleChange} />
                                               </div>
                                           </div>
                                           <div className="col-md-12">
                                               <div className="form-group">
                                                   <input type="submit"  className="btn btn-primary"/>
                                                   <div className="submitting">{status}</div>
                                               </div>
                                           </div>
                                       </div>
                     
           {error && (
            <div>
                <p className="errorMessage">{error}</p> </div>
                 )}
                            
                 </form>
            </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
    </section>
     );
  }

export default Login;