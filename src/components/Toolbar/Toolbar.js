import React from 'react';
import { Link } from 'react-router-dom';
import './Toolbar.css';
import { Component } from 'react';
import { LogOut } from 'react-feather';

class toolbar extends Component {
  constructor(props) {
    super(props);
    localStorage.removeItem('jwt');
  }
  render() {
    return (
      <nav className={'navbar fixed-top mainNavbar'}>
        <Link className='navbar-brand' to='/admin_dashboard/'>
          <img
            src={require('../../assets/Images/officialLogo.png')}
            alt='WelTec logo'
            width='150'
          />
        </Link>
        <span className='navbar-text text-white'>
          <Link style={{ textDecoration: 'none', color: '#FFF' }} to='/administration'>
          <LogOut size={20}/>{' '}
            Log out
          </Link>
        </span>
      </nav>
    );
  }
}
export default toolbar;
