import React from 'react';
import {Form, Row, Col} from 'react-bootstrap';

const General = () => {
    return (
        <>
            <Form>
                <Form.Group as={Row} controlId="formPlaintextEmail">
                    <Form.Label column sm="2">
                    Email
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control plaintext defaultValue="email@example.com" />
                    </Col>
                </Form.Group>
            </Form>
        </>
    )
}

export default General
