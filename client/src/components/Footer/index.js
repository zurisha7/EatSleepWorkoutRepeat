import React from 'react';

const Footer = () => {
    return (
        // need to figure out why link icons are not showing, but they will soon.
        <footer className="container-fluid">
        <p>Online Store Copyright</p>  
        <form className="form-inline">
            <p>Donate:</p>
            {/* Link to stripe */}
          <input type="email" className="form-control" size="50" placeholder="Email Address" />
          <button type="button" className="btn btn-danger">Sign Up</button>
        </form>
      </footer>
    );
};

export default Footer;