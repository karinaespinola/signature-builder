import React from 'react';
import {Form, Row, Col} from 'react-bootstrap';
import {UserDataContext} from '../../../contexts/UserDataProvider';

const AddImageLink = () => {
    const [userData, updateUserData] = React.useContext(UserDataContext);

    const changeUserData = (data) => {
        updateUserData({...userData,...data});
    }
    
    return (
        <Form className="mt-3">
            <Form.Group as={Row} controlId="name">
                <Form.Label column sm="2">
                Add link
                </Form.Label>
                <Col sm="10">
                    <Form.Control plaintext name="name" value={userData.avatarImageLink ? userData.avatarImageLink : ''} onChange={(e) => changeUserData({name : e.target.value})}/>
                </Col>
            </Form.Group>
        </Form>
    )
}

export default AddImageLink
