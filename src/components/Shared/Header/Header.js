import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';


const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <>
            <Navbar bg="danger" variant="dark" sticky="top" collapseOnSelect expand="lg">
                <Container >
                    <Navbar.Brand to="/home">FAGUN TOUR OPERATOR</Navbar.Brand>

                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end text-white ">
                        <Nav.Link as={Link} className="text-white" to="/home">Home</Nav.Link>
                        <Nav.Link as={Link} className="text-white" to="/services">Packages</Nav.Link>
                        <Nav.Link as={Link} className="text-white" to="/dashboard">My Orders</Nav.Link>

                        <Nav.Link as={Link} className="text-white" to="/about">About</Nav.Link>
                        <Nav.Link as={Link} className="text-white" to="/contact">Contact</Nav.Link>


                        {user?.email ?

                            <Button onClick={logOut} variant="light">Log Out</Button>
                            :
                            <Nav.Link as={Link} to="/login">Log In</Nav.Link>}
                        <Navbar.Text>
                            Signed: <a href="#login">{user?.displayName}</a>
                        </Navbar.Text>
                    </Navbar.Collapse>

                </Container>
            </Navbar>

        </>
    );
};

export default Header;