import React from 'react';
import firebase from '../../firebase/firebase';
import {Row, Col, Card, Button} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons'


const Login = () => {
    return (
        <Row>
            <Col                 
            md={{ span: 6, offset: 3 }}
            xs={{ span: 12}}
            >
                <Card 
                className="bg-light-grey p-5">
                    <Card.Body className="d-flex justify-content-center">
                        <div>
                            <h3 className="text-center mb-3">
                                Login with social media
                            </h3>
                            <Button className="bg-blue btn-login btn-google-login" size="lg">
                                <span className="btn-icon leftx">
                                    <FontAwesomeIcon icon={faGoogle}></FontAwesomeIcon>
                                </span> 
                                    Google
                            </Button>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    )
}

export default Login
