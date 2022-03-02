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
                    <Navbar.Brand href="/"><h1>Paw-Roled</h1></Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/perppage">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}

export default NavTabs;
