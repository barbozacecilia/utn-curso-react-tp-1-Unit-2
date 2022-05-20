import React from "react";
import {Link} from "react-router-dom";
import './MenuStyles.css'
import {Container, Nav, Navbar} from "react-bootstrap";
import NavDropdown from 'react-bootstrap/NavDropdown'
import AuthContext from "../../Context/AuthContext";


function Menu() {
    return (
        <AuthContext.Consumer>
            {context =>
                <Navbar bg="light" expand="lg" className="mainContainerMenu">
                    <Container className="ulMenu">
                        <Navbar.Brand href="#home"><h1>Mi tienda</h1></Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link as={Link} to='/' className="navItem">Home</Nav.Link>
                                <Nav.Link as={Link} to='/headset' className="navItem">Auriculares</Nav.Link>
                                <Nav.Link as={Link} to='/clothing' className="navItem">Ropa</Nav.Link>
                                {!context.userLogin &&
                                    <>
                                        < Nav.Link as={Link} to='/registration'
                                                   className="navItem">registrarse</Nav.Link>
                                        <Nav.Link as={Link} to='/log-in' className="navItem">Ingresar</Nav.Link>
                                    </>
                                }
                                {context.userLogin &&
                                    <>
                                        <NavDropdown className="navItem" title="Productos" id="nav-dropdown">
                                            <NavDropdown.Item as={Link} to="/products/add">Agregar</NavDropdown.Item>
                                            <NavDropdown.Item as={Link} to="/products/new">Nuevos</NavDropdown.Item>
                                        </NavDropdown>
                                        <Nav.Link onClick={context.logoutUser} className="navItem">Salir</Nav.Link>
                                    </>
                                }
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            }
        </AuthContext.Consumer>
    );
}

export default Menu
