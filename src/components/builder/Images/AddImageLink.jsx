/* eslint-disable react/prop-types */
import React from 'react';
import {Form, Row, Col} from 'react-bootstrap';
import {UserDataContext} from '../../../contexts/UserDataProvider';

const AddImageLink = (props) => {
    const {userData, updateUserData} = React.useContext(UserDataContext);
    const {updateImageLink} = props;

    const changeUserData = (data) => {
        updateUserData({...userData,...data});
    }
    
    return (
        <Form className="mt-3">
            <Form.Group as={Row} controlId="name">
                <Form.Label column sm="3">
                Add link
                </Form.Label>
                <Col sm="8">
                    <Form.Control plaintext 
                    name="name" 
                    value={userData.avatarImageLink ? userData.avatarImageLink : ''} 
                    onChange={(e) => updateImageLink(e.target.value)}/>
                </Col>
            </Form.Group>
        </Form>
    )
}

export default AddImageLink
