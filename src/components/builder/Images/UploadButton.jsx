import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons'

const UploadButton = () => {
    return (
        <div>
            <FontAwesomeIcon icon={faCloudUploadAlt} size="10x" />
        </div>
    )
}

export default UploadButton
