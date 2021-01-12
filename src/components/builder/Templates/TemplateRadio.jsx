/* eslint-disable react/prop-types */
import React from 'react';
import {Form} from 'react-bootstrap';

const TemplateRadio = (props) => {
    const {src, id, checked} = props;
    return (
        <Form className="template-selector">
            <Form.Check type="radio" id={id}>
                <Form.Check.Input type="radio" defaultChecked={checked}/>
                <Form.Check.Label>
                    <img src={src}></img>
                </Form.Check.Label> 
            </Form.Check>
        </Form>
    )
}

export default TemplateRadio
