import React from 'react';
import './Navbar.css';
import logo from '../../assets/Logo.jpg';

const Navbar = () => {
  return (
    <div className='navbar'>
      <img src={logo} alt="" className='logo'/>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Programs</li>
        <li>News</li>
        <li>Future Plans</li>
        
      </ul>

      <div >
        <button className="signin">Sign In</button>
        <button className="getStarted">Get Started</button>
      </div>
      
    </div>

    
  );
}

export default Navbar;
