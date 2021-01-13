/* eslint-disable react/prop-types */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons'
import {Row, Col} from 'react-bootstrap';

const UploadButton = (props) => {

    const {fileInputId} = props;

    const handleClick = (e) => {
        const fileInput = document.getElementById(fileInputId);
        if(!fileInputId){
            return;
        }
        fileInput.click();
    }
    return (
        <div className="upload-image" onClick={(e) => handleClick(e)}>
            <FontAwesomeIcon icon={faCloudUploadAlt} size="2x" />
            <p>Upload Image</p>
            <input type="file" name={fileInputId} id={fileInputId} className="d-none"/>
        </div>            
    )
}

export default UploadButton
