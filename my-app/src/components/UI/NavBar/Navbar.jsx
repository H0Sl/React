import React, { useContext } from "react";
import { Link } from "react-router-dom";
import '../../../style/app.css';
import MyBtn from "../button/MyBtn";
import { AuthContext } from "../../../context";


const Navbar = (props) => {
  const {isAuth,setIsAuth} = useContext(AuthContext);

  return (
    <div className='navbar'>
        <MyBtn onClick={() => setIsAuth(false)}>GET OUT</MyBtn>
        <div className='navbar__links'>
          <Link to="/about" className='navbar__link'>About us</Link>
          <Link to="/posts" className='navbar__link'>Posts</Link>
        </div>
      </div>
  )
};

export default Navbar;
