import React from 'react';
import {Form, Row, Col} from 'react-bootstrap';

const General = () => {
    return (
        <>
            <Form className="mt-3">
                <Form.Group as={Row} controlId="name">
                    <Form.Label column sm="2">
                    Name
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control plaintext name="name" />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="company">
                    <Form.Label column sm="2">
                    Company
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control plaintext  name="company"/>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="position">
                    <Form.Label column sm="2">
                    Position
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control plaintext  name="position"/>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="department">
                    <Form.Label column sm="2">
                    Department
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control plaintext  name="department"/>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="phone">
                    <Form.Label column sm="2">
                    Phone
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control plaintext  name="phone"/>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="mobile">
                    <Form.Label column sm="2">
                    Mobile
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control plaintext  name="mobile"/>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="website">
                    <Form.Label column sm="2">
                    Website
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control plaintext  name="website"/>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="address">
                    <Form.Label column sm="2">
                    Address
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control plaintext  name="address"/>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="skype">
                    <Form.Label column sm="2">
                    Skype
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control plaintext  name="skype"/>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="email">
                    <Form.Label column sm="2">
                    Email
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control plaintext name="email"/>
                    </Col>
                </Form.Group>
            </Form>
        </>
    )
}

export default General
