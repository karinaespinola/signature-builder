/* eslint-disable react/prop-types */
import React from 'react';
import firebase from '../../firebase/firebase';
import {Row, Col, Card, Button} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import {withRouter} from 'react-router-dom';


const Login = (props) => {

    const [provider, setProvider] = React.useState(null);

    React.useEffect(() => {
        const providerLocal = new firebase.auth.GoogleAuthProvider();
        setProvider(providerLocal);
    }, []);

    const login = React.useCallback((e) => {
        firebase.
        auth()
        .signInWithPopup(provider)
        .then((result) => {
          /** @type {firebase.auth.OAuthCredential} */
          var credential = result.credential;
      
          // This gives you a Google Access Token. You can use it to access the Google API.
          var token = credential.accessToken;
          // The signed-in user info.
          var user = result.user;
          console.log(user);
          props.history.push('/');
          // ...
        }).catch((error) => {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // The email of the user's account used.
          var email = error.email;
          // The firebase.auth.AuthCredential type that was used.
          var credential = error.credential;
          // ...
          console.log(error);
        });
    }, [firebase, props, provider]);

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
                            <Button 
                            className="bg-blue btn-login btn-google-login" 
                            size="lg"
                            onClick={(e) => login()}
                            >
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

export default withRouter(Login);
