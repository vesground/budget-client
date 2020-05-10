import React from 'react';
import { Link } from "react-router-dom";

//Styles
import './index.scss';

const Header = () => {
  return (
    <div className='tr-header'>
      <Link to="/login">Login</Link>
      <Link to="/">Landing Page</Link>
    </div>
  );
};

export default Header;
