import React from "react";
import {Link} from "react-router-dom";
import './MenuStyles.css'
import {Container, Nav, Navbar} from "react-bootstrap";
import NavDropdown from 'react-bootstrap/NavDropdown'


function Menu(props) {
    const{login}=props;
    return (
        <div>
            <Navbar bg="light" expand="lg" className="mainContainerMenu">
                <Container className="ulMenu">
                    <Navbar.Brand href="#home"><h1>Mi tienda</h1></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to='/' className="navItem">Home</Nav.Link>
                            <Nav.Link as={Link} to='/headset' className="navItem">auriculares</Nav.Link>
                            <Nav.Link as={Link} to='/clothing' className="navItem">ropa</Nav.Link>
                            <Nav.Link as={Link} to='/registration' className="navItem">registrarse</Nav.Link>
                            <Nav.Link as={Link} to='/log-in' className="navItem">ingresar</Nav.Link>
                            {!login &&
                            <NavDropdown  className="navItem" title="Productos" id="nav-dropdown">
                                <NavDropdown.Item as={Link} to="/products/add">Agregar</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/products/new">Nuevos</NavDropdown.Item>
                            </NavDropdown>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default Menu
