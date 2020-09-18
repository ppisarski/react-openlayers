import React from 'react';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { LinkContainer } from 'react-router-bootstrap';


const Maps = (props) => (
    <LinkContainer to="/">
        <Nav.Link eventKey="map" onSelect={props.navigationToggle} >Map</Nav.Link>
    </LinkContainer>
);

const Navigation = (props) =>
    (
        <Navbar bg="primary" variant="dark" fixed="top" expand="md">
            <Navbar.Brand href="/">MyMap</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbar" />
            <Navbar.Collapse id="navbar">
                <Nav className="ml-auto" >
                    <Maps navigationToggle={props.navigationToggle} />
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );

export default Navigation;