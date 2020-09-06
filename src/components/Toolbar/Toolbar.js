import React from 'react';
import { Link } from 'react-router-dom';
import toolbarStyle from './Toolbar.css';
const toolbar = (props) => (
  <nav className={'navbar fixed-top'} style={{ backgroundColor: '#1F9ED9' }}>
    <a className='navbar-brand' href='login'>
      <img
        src={require('../../assets/Images/weltec-logo.svg')}
        alt='WelTec logo'
        width='150'
      />
    </a>
    <span className='navbar-text text-white'>
      <Link style={{ textDecoration: 'none', color: '#FFF' }}>Log out</Link>
    </span>
  </nav>
);
export default toolbar;
