import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';
import logo from '../../images/logo.png'


const logout = event => {
    event.preventDefault();
    Auth.logout();
};


const Header  = () => {
 
    return (       
   <header>     
    <div className="jumbotron">
    <div className="container text-center">
    <img src={logo} alt="EatSleepWorkoutRepeatLogo" />      
    </div>
  </div>
  
  <nav className="navbar navbar-inverse">
    <div className="container-fluid">
      <div className="navbar-header">
        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>                        
        </button>
      
      </div>
      
 
  
        
        <nav className="navBar"> 
              <div className="collapse navbar-collapse" id="myNavbar"> 
              {Auth.loggedIn() ? (
    
            <ul className="nav navbar-nav">
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
                    <Link to='/Conact' className='nav-link'>
                        CONTACT
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/login' className='nav-link' onClick={logout}>
                       LOGOUT                        
                    </Link>
                </li>
            </ul>
                
            ) : (
            <ul className="nav navbar-nav navbar-right">
                <li className='nav-item'>
                    <Link to='/login' className='nav-link' >
                    <span className="glyphicon glyphicon-user"></span>
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
            </div>
        </nav>
      </div>
    </nav>
</header>

    )
};

export default Header;