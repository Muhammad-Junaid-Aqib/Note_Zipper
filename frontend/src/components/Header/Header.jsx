import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Navbar bg="primary" expand="lg" variant='dark'>
      <Container>
        <Navbar.Brand>
          <Link to='/'>
            Note Zipper
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className='m-auto'>
            <Form inline>
              <Form.Control
                type="search"
                placeholder="Search"
                className="mr-sm-2"
              />
            </Form>
          </Nav>
          <Nav
          // className="me-auto my-2 my-lg-0"
          // style={{ maxHeight: '100px' }}
          // navbarScroll
          >
            <Nav.Link href="#action1">
              <Link to="/mynotes">
                My Notes
              </Link>
            </Nav.Link>
            <NavDropdown title="Junaid" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">My Profile</NavDropdown.Item>
              {/* <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item> */}
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Logout
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
