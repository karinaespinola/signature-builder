import React from 'react';
import {Navbar, Dropdown} from 'react-bootstrap';
import {AuthContext} from '../../contexts/AuthProvider';

const Navigation = () => {
    const {user} = React.useContext(AuthContext);

    return (        
    <Navbar bg="light" expand="lg" className="mb-5">
        <div className="container justify-content-between">
            <Navbar.Brand href="#home">SigaTron</Navbar.Brand>
            {
                user && (
                    <Dropdown>
                        <Dropdown.Toggle id="dropdown-basic">
                            <img src={user.photoURL} alt="" />
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>   
                )
            }
         
        </div>
    </Navbar>        
    )
}

export default Navigation
