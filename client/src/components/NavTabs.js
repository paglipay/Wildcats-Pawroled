import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Navbar, Nav, Container, Button, Form, FormControl, Alert } from 'react-bootstrap';
// import Login from "./Users/LoginModal";

function NavTabs(
) {

    return (
        <>
            <Navbar bg="dark" variant="dark"  sticky="top">
                <Container>
                    <Navbar.Brand href="/"><h2>PAW-Roled</h2></Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/perppage">Criminal Database</Nav.Link>
                        <Nav.Link href="#footer">About</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}

export default NavTabs;
