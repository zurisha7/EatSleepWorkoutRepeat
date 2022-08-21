import React from 'react';

const Footer = () => {
    return (
        // need to figure out why link icons are not showing, but they will soon.
        <footer className="container-fluid"> 
        <div>
           <p className='footText text-left'>Thanks for letting us help YOU! </p>        
           <a href ='/Stripe' className="footTextTwo text-right">Help support us!!  Donate here!!</a>
        </div>
        </footer>
    );
};

export default Footer;