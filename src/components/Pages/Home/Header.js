import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { setAuthantication } from '../../../States/Reducers/auth-reducer';
import { Link } from 'react-router-dom';
const Header = () => {
    const dispatch = useDispatch();
    const logoutHandler = () => {
        localStorage.setItem('idToken');
        localStorage.setItem('userID');
        localStorage.setItem('email');

        dispatch(
            setAuthantication({
                idToken: null,
                isLogin: false,
                userID: null,
                email: null
            })
        );


    }

    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">Mail Box Client</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link>
                            <Link to="/compose-email" style={{ textDecoration: "none" }}>
                                Compose Email
                            </Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to="/inbox/sentmail" style={{ textDecoration: "none" }}>
                                Inbox
                            </Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to="/sent-email" style={{ textDecoration: "none" }}>
                                Sent Email
                            </Link>
                        </Nav.Link>
                    </Nav>
                    <Button variant="primary" onClick={logoutHandler}>
                        Logout
                    </Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};
export default Header;