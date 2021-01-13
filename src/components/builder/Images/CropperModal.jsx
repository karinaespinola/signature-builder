/* eslint-disable react/prop-types */
import React from 'react';
import {Modal, Button} from 'react-bootstrap';

const CropperModal = (props) => {
    const {show, handleClose, handleSave} = props;
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton></Modal.Header>
            <Modal.Body>

            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleSave}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default CropperModal
