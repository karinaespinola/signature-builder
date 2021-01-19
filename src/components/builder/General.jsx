import React from 'react';
import {Form, Row, Col} from 'react-bootstrap';
import {UserDataContext} from '../../contexts/UserDataProvider';

const General = () => {
    const {userData, updateUserData} = React.useContext(UserDataContext);

    const changeUserData = (data) => {
        updateUserData({...userData, ...data});
    }

    return (
        <>
            <Form className="mt-3">
                <Form.Group as={Row} controlId="name">
                    <Form.Label column sm="2">
                    Name
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control plaintext name="name" value={userData.name ? userData.name : ''} onChange={(e) => changeUserData({name : e.target.value})}/>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="company">
                    <Form.Label column sm="2">
                    Company
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control plaintext  name="company"  value={userData.company ? userData.company : ''} onChange={(e) => changeUserData({company : e.target.value})}/>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="position">
                    <Form.Label column sm="2">
                    Position
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control plaintext  name="position"  value={userData.position ? userData.position : ''} onChange={(e) => changeUserData({position : e.target.value})}/>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="department">
                    <Form.Label column sm="2">
                    Department
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control plaintext  name="department"  value={userData.department ? userData.department : ''} onChange={(e) => changeUserData({department : e.target.value})}/>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="phone">
                    <Form.Label column sm="2">
                    Phone
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control plaintext  name="phone"  value={userData.phone ? userData.phone : ''} onChange={(e) => changeUserData({phone : e.target.value})}/>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="mobile">
                    <Form.Label column sm="2">
                    Mobile
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control plaintext  name="mobile"  value={userData.mobile ? userData.mobile : ''} onChange={(e) => changeUserData({mobile : e.target.value})}/>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="website">
                    <Form.Label column sm="2">
                    Website
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control plaintext  name="website"  value={userData.website ? userData.website : ''} onChange={(e) => changeUserData({website : e.target.value})}/>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="address_1">
                    <Form.Label column sm="2">
                    Address Line 1
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control plaintext  name="address_1"  value={userData.address_1 ? userData.address_1 : ''} onChange={(e) => changeUserData({address_1 : e.target.value})}/>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="address_2">
                    <Form.Label column sm="2">
                    Address Line 2
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control plaintext  name="address_2"  value={userData.address_2 ? userData.address_2 : ''} onChange={(e) => changeUserData({address_2 : e.target.value})}/>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="city">
                    <Form.Label column sm="2">
                    City
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control plaintext  name="city"  value={userData.city ? userData.city : ''} onChange={(e) => changeUserData({city : e.target.value})}/>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="state">
                    <Form.Label column sm="2">
                    State
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control plaintext  name="state"  value={userData.state ? userData.state : ''} onChange={(e) => changeUserData({state : e.target.value})}/>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="zip">
                    <Form.Label column sm="2">
                    Zip
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control plaintext  name="zip"  value={userData.zip ? userData.zip : ''} onChange={(e) => changeUserData({zip : e.target.value})}/>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="skype">
                    <Form.Label column sm="2">
                    Skype
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control plaintext  name="skype"  value={userData.skype ? userData.skype : ''} onChange={(e) => changeUserData({skype : e.target.value})}/>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="email">
                    <Form.Label column sm="2">
                    Email
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control plaintext name="email"  value={userData.email} onChange={(e) => changeUserData({email : e.target.value})}/>
                    </Col>
                </Form.Group>
            </Form>
        </>
    )
}

export default General
