import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.svg';

function Image() {
  return (
    <Link to='/' className='header'>
      <div className='container'>
        <img className='header__logo' src={Logo} alt='Home' />
      </div>
    </Link>
  );
}

export default Image;
