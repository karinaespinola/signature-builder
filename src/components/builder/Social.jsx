import React from 'react';
import {Form, Row, Col} from 'react-bootstrap';
import {UserDataContext} from '../../contexts/UserDataProvider';

const Social = () => {
    const {userData, updateUserData} = React.useContext(UserDataContext);

    const changeUserData = (data) => {
        updateUserData({...userData, ...data});
    }

    return (
        <>
            <Form className="mt-3">
                <Form.Group as={Row} controlId="facebook">
                    <Form.Label column sm="2">
                        Facebook
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control plaintext name="facebook" value={userData.facebook ? userData.facebook : ''} onChange={(e) => changeUserData({facebook : e.target.value})}/>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="instagram">
                    <Form.Label column sm="2">
                        Instagram
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control plaintext name="instagram" value={userData.instagram ? userData.instagram : ''} onChange={(e) => changeUserData({instagram : e.target.value})}/>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="twitter">
                    <Form.Label column sm="2">
                        Twitter
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control plaintext name="twitter" value={userData.twitter ? userData.twitter : ''} onChange={(e) => changeUserData({twitter : e.target.value})}/>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="linkedin">
                    <Form.Label column sm="2">
                        LinkedIn
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control plaintext name="linkedin" value={userData.linkedin ? userData.linkedin : ''} onChange={(e) => changeUserData({linkedin : e.target.value})}/>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="youtube">
                    <Form.Label column sm="2">
                        YouTube
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control plaintext name="youtube" value={userData.youtube ? userData.youtube : ''} onChange={(e) => changeUserData({youtube : e.target.value})}/>
                    </Col>
                </Form.Group>
            </Form>
        </>
    )
}

export default Social
