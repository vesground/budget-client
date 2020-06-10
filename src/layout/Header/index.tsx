import React from 'react';
import { Link } from "react-router-dom";

//Styles
import './index.scss';

const Header = ({ role }: { role: string | undefined }) => {
  return (
    <div className='tr-header'>
      <Link to="/sign-in">Sign in</Link>
      <Link to="/sign-up">Sign up</Link>
      <Link to="/">Landing Page</Link>
      {role}
    </div>
  );
};

export default Header;
