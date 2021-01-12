import React from 'react';
import {Navbar,Nav} from 'react-bootstrap';

const Navigation = () => {
    return (        
    <Navbar bg="light" expand="lg" className="mb-5">
        <div className="container">
            <Navbar.Brand href="#home">SigaTron</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
        </div>
    </Navbar>        
    )
}

export default Navigation
