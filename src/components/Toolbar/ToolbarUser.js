import React from 'react';
import { Component } from 'react';
import { NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import './Toolbar.css';
import { User } from 'react-feather';

class toolbar extends Component {
  constructor(props) {
    super(props);
    localStorage.removeItem('jwt');
  }
  render() {
    return (
      <nav className={'navbar fixed-top mainNavbar'}>
        <Link className='navbar-brand' to='/user_dashboard/'>
          <img
            src={require('../../assets/Images/officialLogo.png')}
            alt='WelTec logo'
            width='150'
          />
        </Link>
          <NavDropdown title={<span><User size={22}/> Account</span>} id="nav-dropdown">
            <NavDropdown.Item>
              <Link className='text-decoration-none text-dark' to='/user_profile/'>
                View Profile
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Link className='text-decoration-none text-dark' to='/'>
                Log out
              </Link>
            </NavDropdown.Item>
          </NavDropdown>      
      </nav>
    );
  }
}
export default toolbar;
