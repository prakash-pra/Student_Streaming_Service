import React from 'react';
const toolbar = (props) => (
  <nav className='navbar fixed-top' style={{ backgroundColor: '#1F9ED9' }}>
    <a className='navbar-brand' href='login'>
      <img
        src={require('../../assets/Images/weltec-logo.svg')}
        alt='WelTec logo'
        width='150'
      />
    </a>
    <span className='navbar-text text-white'>Log out</span>
  </nav>
);
export default toolbar;
