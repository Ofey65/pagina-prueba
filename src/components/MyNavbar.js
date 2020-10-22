import React from 'react';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap'

const MyNavbar = () => {
    return(
        <Navbar bg="dark" expand="lg" variant="dark">
            <Navbar.Brand href="#home">Departamento de Física</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#directorio">Directorio</Nav.Link>
                <NavDropdown title="More" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#recursos">Recursos</NavDropdown.Item>
                    <NavDropdown.Item href="#about">Something more</NavDropdown.Item>
                    <NavDropdown.Item href="#contacto">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#otro">Separated link</NavDropdown.Item>
                </NavDropdown>
            </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default MyNavbar