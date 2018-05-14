// Global import
import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const activeStyle = {
    color: 'red',
    fontSize: '2rem'
  };
  
  return (
    <div>
      <ul>
        <li><NavLink exact to="/" activeStyle={activeStyle}>Home</NavLink></li>
        <li><NavLink to="/login" activeStyle={activeStyle}>로그인</NavLink></li>
        <li><NavLink to="/signup" activeStyle={activeStyle}>회원가입</NavLink></li>
      </ul>
      <hr/>
    </div>
  );
};

export default Header;
