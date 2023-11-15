import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import Image from 'react-bootstrap/Image'; 

const Header = () => {
  return (
    <div className='container mt-3'>
    <Navbar bg="dark" variant="dark" expand="lg">
      <Image src="/gcomlogo.jpg" alt="G-com Solutions Logo" fluid height="50px" width="50px" className="ml-4" />
      <Navbar.Brand href="/" className="ml-2">G-com Solutions</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="/" className="ml-4">Home</Nav.Link>
          <Nav.Link href="/about" className="ml-4">About</Nav.Link>
          <Nav.Link href="/services" className="ml-4">Services</Nav.Link>
          <Nav.Link href="/contact" className="ml-4">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    </div>
  );
};

export default Header;
