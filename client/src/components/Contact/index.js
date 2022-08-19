import React from 'react';
 //import { validator } from 'validator';

const Contact = ()=> {
       
//     const [formState, setFormState] = useState({ name: '', email: '', message: ''});

//     const[emailError, setEmailError] = useState('');
//     const { name, email, message } = formState;

//     const [status, setStatus] = useState('');


//     const handleSubmit = (event) => {
//         event.preventDefault();
//         setStatus('Sending...')
        
//         // let details = {
//         //     name: name.value,
//         //     email: email.value,
//         //     message: message.value
//         // };

//         // let response = await fetch('http://localhost:3001/contact', {
//         //     method: 'POST',
//         //     headers: {
//         //         'Content-Type': 'application/json;charset=utf-8',
//         //     },
//         //     body: JSON.stringify(details),
//         // });
//         setStatus('Submit');
//         // let result = await response.json();
//         // alert(result.status);
    
        
//         if(!emailError){
//             console.log('Form', formState);
//         }
//     };

//     const handleChange = (event) => {
//         let email = event.target.value

//         //use validator to ensure a valid email
//         if(validator.isEmail(email)){
//             setEmailError('')
//         } else {
//             setEmailError('Please enter a valid email!');
//         }
// //if there is no error use input as values
//         if(!emailError){
//             setFormState({...formState, [event.target.name]: event.target.value });
//             console.log('Handle Form', formState);
//         }
//     }
    return (<div></div>
    //    <form onSubmit={handleSubmit}>
    //     <div>
    //         <label htmlFor="name">Name:</label>
    //         <input type="text" id="name" defaultValue={name} onBlur={handleChange} />
    //     </div>
    //     <div>
    //         <label htmlFor="email">Email:</label>
    //         <input type="email" id="email" defaultValue={email} onBlur={handleChange} />            
    //     </div>
    //     <div>
    //         <label htmlFor="message">Message: </label>
    //         <textarea id="message" rows='rows' required defaultValue={message} onBlur={handleSubmit} />
    //     </div>
    //     <button type="submit" className='btn'>{status}</button>
    //     {emailError && (
    //         <div>
    //             <p className="errorMessage">{emailError}</p>
    //         </div>
    //     )}
    //    </form>
    );
 }

export default Contact;