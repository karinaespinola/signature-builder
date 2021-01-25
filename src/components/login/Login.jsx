import React from 'react';
import firebase from '../../firebase/firebase';
import {Card, Button} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons'


const Login = () => {
    return (
        <Card className="bg-light-grey p-5">
            <Card.Body>
                <Button className="bg-blue btn-login" size="lg">
                    <span className="btn-icon leftx">
                        <FontAwesomeIcon icon={faGoogle}></FontAwesomeIcon>
                    </span> 
                        Google
                </Button>
            </Card.Body>
        </Card>
    )
}

export default Login
