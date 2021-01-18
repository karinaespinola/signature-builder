/* eslint-disable react/prop-types */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons'

const UploadButton = (props) => {

    const {fileInputId, handleFileChange} = props;

    const handleClick = (e) => {
        const fileInput = document.getElementById(fileInputId);
        if(!fileInputId){
            return;
        }
        fileInput.click();
    }

    const handleChange = (e) => {
        const fileInput = document.getElementById(fileInputId);

        if (e.target.files && e.target.files.length > 0) {
            const file = e.target.files[0];
            handleFileChange(file);
            fileInput.value = null;
        }
    }

    return (
        <div className="upload-image" onClick={(e) => handleClick(e)}>
            <FontAwesomeIcon icon={faCloudUploadAlt} size="2x" />
            <p>Upload Image</p>
            <input type="file" name={fileInputId} id={fileInputId} className="d-none" onChange={(e) => handleChange(e)}/>
        </div>            
    )
}

export default UploadButton
