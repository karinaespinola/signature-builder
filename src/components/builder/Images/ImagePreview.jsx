import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

const ImagePreview = (props) => {
    // eslint-disable-next-line react/prop-types
    const {src, showDeleteButton, previewWidth, handleDeleteButton} = props;

    const handleClick = (e) => {
       handleDeleteButton(e);
    }

    return (
        <div style={{position: 'relative', maxWidth: previewWidth, margin: '0 auto'}}>
            <img 
            src={src} 
            alt="" 
            style={{maxWidth: '100%'}}
            />
            {
                showDeleteButton
                ? <>
                    <span className="delete-image-button" onClick={(e) => handleClick(e)}>
                        <FontAwesomeIcon icon={faTimes} role="button"/>
                    </span>                    
                 </>
                : null
            }

        </div>
    )
}

export default ImagePreview
