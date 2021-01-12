import React from 'react';
import {Form, Row, Col} from 'react-bootstrap';
import {UserDataContext} from '../../contexts/UserDataProvider';

const General = () => {
    const {userData, setUserData} = React.useContext(UserDataContext);

    const updateUserData = (data) => {
        setUserData({...userData, ...data});
    }

    return (
        <>
            <Form className="mt-3">
                <Form.Group as={Row} controlId="name">
                    <Form.Label column sm="2">
                    Name
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control plaintext name="name" value={userData.name} onChange={(e) => updateUserData({name : e.target.value})}/>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="company">
                    <Form.Label column sm="2">
                    Company
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control plaintext  name="company"  value={userData.company} onChange={(e) => updateUserData({company : e.target.value})}/>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="position">
                    <Form.Label column sm="2">
                    Position
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control plaintext  name="position"  value={userData.position} onChange={(e) => updateUserData({position : e.target.value})}/>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="department">
                    <Form.Label column sm="2">
                    Department
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control plaintext  name="department"  value={userData.department} onChange={(e) => updateUserData({department : e.target.value})}/>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="phone">
                    <Form.Label column sm="2">
                    Phone
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control plaintext  name="phone"  value={userData.phone} onChange={(e) => updateUserData({phone : e.target.value})}/>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="mobile">
                    <Form.Label column sm="2">
                    Mobile
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control plaintext  name="mobile"  value={userData.mobile} onChange={(e) => updateUserData({mobile : e.target.value})}/>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="website">
                    <Form.Label column sm="2">
                    Website
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control plaintext  name="website"  value={userData.website} onChange={(e) => updateUserData({website : e.target.value})}/>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="address">
                    <Form.Label column sm="2">
                    Address
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control plaintext  name="address"  value={userData.address} onChange={(e) => updateUserData({website : e.target.value})}/>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="skype">
                    <Form.Label column sm="2">
                    Skype
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control plaintext  name="skype"  value={userData.skype} onChange={(e) => updateUserData({skype : e.target.value})}/>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="email">
                    <Form.Label column sm="2">
                    Email
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control plaintext name="email"  value={userData.email} onChange={(e) => updateUserData({email : e.target.value})}/>
                    </Col>
                </Form.Group>
            </Form>
        </>
    )
}

export default General
