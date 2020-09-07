import React from 'react';
import { Link } from 'react-router-dom';
import './Toolbar.css';
const toolbar = (props) => (
  <nav className={'navbar fixed-top mainNavbar'}>
    <Link className='navbar-brand' pathName='/dashboad'>
      <img
        src={require('../../assets/Images/weltec-logo.svg')}
        alt='WelTec logo'
        width='150'
      />
    </Link>
    <span className='navbar-text text-white'>
      <Link style={{ textDecoration: 'none', color: '#FFF' }}>Log out</Link>
    </span>
  </nav>
);
export default toolbar;
