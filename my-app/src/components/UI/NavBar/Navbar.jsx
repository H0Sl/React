import React from "react";
import { Link } from "react-router-dom";
import '../../../style/app.css';


const Navbar = (props) => {
  return (
    <div className='navbar'>
        <div className='navbar__links'>
          <Link to="/about" className='navbar__link'>About us</Link>
          <Link to="/posts" className='navbar__link'>Posts</Link>
        </div>
      </div>
  )
};

export default Navbar;
