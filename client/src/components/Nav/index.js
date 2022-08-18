import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';

const logout = event => {
    event.preventDefault();
    Auth.logout();
};


const Navbar  = () => {
 
    return (
        <nav className="navBar">
            {Auth.loggedIn() ? (
                <>
            <Link to ='/' className='navHome'>
                HOME
            </Link>
            <ul className='nav-links active'>
                <li className='nav-item'>
                    <Link to='/' className='nav-link'>
                        HOME
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/Eat' className='nav-link' >
                        EAT
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/Sleep' className='nav-link' >
                        SLEEP
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/Workout' className='nav-link' >
                        WORKOUT
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/login' className='nav-link' onClick={logout}>
                        LOGOUT                        
                    </Link>
                </li>
            </ul>
                </>
            ) : (
         <ul className= 'nav-links active'>
            <li className='nav-item'>
                    <Link to='/' className='nav-link' >
                        LOGIN
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/Signup' className='nav-link'>
                        SIGNUP
                    </Link>
                </li>
            </ul>
            )}
        </nav>
    )
};

export default Navbar;