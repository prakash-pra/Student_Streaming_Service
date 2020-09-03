import React from 'react';
import { Navbar, Nav, Image } from 'react-bootstrap';
const toolbar = (props) => (
  <Navbar bg='primary' variant='dark'>
    <Navbar.Brand>
      <Image src='../../assets/Images/Weltec.png' alt='logo' />
    </Navbar.Brand>
    <Nav>
      <Nav.Link href='#logout'>LogOut</Nav.Link>
    </Nav>
  </Navbar>
);
export default toolbar;
