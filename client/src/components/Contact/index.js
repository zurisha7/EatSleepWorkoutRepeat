import React, { useState } from 'react';
 import { validator } from 'validator';

const Contact = ()=> {
       
    const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: ''});

    const[emailError, setEmailError] = useState('');
    const { name, email, subject, message } = formState;

    const [status, setStatus] = useState('');


    const handleSubmit = (event) => {
        event.preventDefault();
        setStatus('Sending...')
        
        // let details = {
        //     name: name.value,
        //     email: email.value,
        //     message: message.value
        // };

        // let response = await fetch('http://localhost:3001/contact', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json;charset=utf-8',
        //     },
        //     body: JSON.stringify(details),
        // });
        setStatus('Submit');
        // let result = await response.json();
        // alert(result.status);
    
        
        if(!emailError){
            console.log('Form', formState);
        }
    };

    const handleChange = (event) => {
        let email = event.target.value

        //use validator to ensure a valid email
        if(validator.isEmail(email)){
            setEmailError('')
        } else {
            setEmailError('Please enter a valid email!');
        }
//if there is no error use input as values
        if(!emailError){
            setFormState({...formState, [event.target.name]: event.target.value });
            console.log('Handle Form', formState);
        }
    }
    return (

        
     
       <section className="ftco-section">
       <div className="container">
           <div className="row justify-content-center">
               <div className="col-md-6 text-center mb-5">
                   <h2 className="heading-section">Contact Form</h2>
               </div>
           </div>
           <div className="row justify-content-center">
               <div className="col-lg-10 col-md-12">
                   <div className="wrapper">
                       <div className="row no-gutters">
                           <div className="col-md-7 d-flex align-items-stretch">
                               <div className="contact-wrap w-100 p-md-5 p-4">
                                   <h3 className="mb-4">Get in touch</h3>
                                   <div id="form-message-warning" className="mb-4"></div> 
                             <div id="form-message-success" className="mb-4" onSubmit={handleSubmit}>
                           Your message was sent, thank you!
                             </div>
                                   <form method="POST" id="contactForm" name="contactForm">
                                       <div className="row">
                                           <div className="col-md-6">
                                               <div className="form-group">

                                                   <input type="text" className="form-control" name="name" id="name" placeholder="Name" defaultValue={name} onBlur={handleChange} />
                                               </div>
                                           </div>
                                           <div className="col-md-6"> 
                                               <div className="form-group">
                                                   <input type="email" className="form-control" name="email" id="email" placeholder="Email" defaultValue={email} onBlur={handleChange} />
                                               </div>
                                           </div>
                                           <div className="col-md-12">
                                               <div className="form-group">
                                                   <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" defaultValue={subject} onBlur={handleChange} />
                                               </div>
                                           </div>
                                           <div className="col-md-12">
                                               <div className="form-group">
                                                   <textarea name="message" className="form-control" id="message" cols="30" rows="7" placeholder="Message" defaultValue={message} onBlur={handleChange} ></textarea>
                                               </div>
                                           </div>
                                           <div className="col-md-12">
                                               <div className="form-group">
                                                   <input type="submit" value="Send Message" className="btn btn-primary"/>
                                                   <div className="submitting">{status}</div>
                                               </div>
                                           </div>
                                       </div>
                                   </form>
                               </div>
                           </div>
                           <div className="col-md-5 d-flex align-items-stretch">
                               <div className="info-wrap bg-primary w-100 p-lg-5 p-4">
                                   <h3 className="mb-4 mt-md-4">Contact us</h3>
                           <div className="dbox w-100 d-flex align-items-start">
                               <div className="icon d-flex align-items-center justify-content-center">
                                   <span className="fa fa-map-marker"></span>
                               </div>
                               <div className="text pl-3">
                               <p><span>Address:</span> Austin, Tx </p>
                             </div>
                         </div>
                           <div className="dbox w-100 d-flex align-items-center">
                               <div className="icon d-flex align-items-center justify-content-center">
                                   <span className="fa fa-phone"></span>
                               </div>
                               <div className="text pl-3">
                               <p><span>Phone:</span> <a href="tel://1234567920">+ 1 571 377 9516</a></p>
                             </div>
                         </div>
                           <div className="dbox w-100 d-flex align-items-center">
                               <div className="icon d-flex align-items-center justify-content-center">
                                   <span className="fa fa-paper-plane"></span>
                               </div>
                               <div className="text pl-3">
                               <p><span>Email:</span> <a href="mailto:andreamest7@gmail.com">andreamwest7@gmail.com</a></p>
                             </div>
                         </div>
                           <div className="dbox w-100 d-flex align-items-center">
                               <div className="icon d-flex align-items-center justify-content-center">
                                   <span className="fa fa-globe"></span>
                               </div>
                               <div className="text pl-3">
                               <p><span>Website</span> <a href="/">EatSleepWorkoutRepeat</a></p>
                             </div>
                         </div>
                     </div>
                           </div>
                       </div>
                   </div>
               </div>
           </div>
           {emailError && (
            <div>
                <p className="errorMessage">{emailError}</p> </div>
                 )}
       </div>
   </section>
    );
 }

export default Contact;