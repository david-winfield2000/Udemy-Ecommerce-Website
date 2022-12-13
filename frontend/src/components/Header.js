import React from 'react';
import { Navbar, Nav, Container, Row, NavDropdown, Form, Button } from 'react-bootstrap';

function Header() {
  return (
    <header>
      <Navbar bg="dark" variant="dark" collapseOnSelect expand="lg">
      <Container fluid>
        <Navbar.Brand href="/">eCommerce Site</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ml-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/cart"><i className='fas fa-shopping-cart'></i> Cart</Nav.Link>
            <Nav.Link href="/login"><i className='fas fa-user'></i> Login</Nav.Link>
            {/* <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
          {/* <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </header>
  )
}

export default Header;