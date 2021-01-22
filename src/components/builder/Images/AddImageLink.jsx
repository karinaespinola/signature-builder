/* eslint-disable react/prop-types */
import React from 'react';
import {Form, Row, Col} from 'react-bootstrap';
import {UserDataContext} from '../../../contexts/UserDataProvider';

const AddImageLink = (props) => {
    const {updateImageLink, link} = props;
    
    return (
        <Form className="mt-3">
            <Form.Group as={Row} controlId="name">
                <Form.Label column sm="3">
                Add link
                </Form.Label>
                <Col sm="8">
                    <Form.Control plaintext 
                    name="name" 
                    value={link} 
                    onChange={(e) => updateImageLink(e.target.value)}/>
                </Col>
            </Form.Group>
        </Form>
    )
}

export default AddImageLink
