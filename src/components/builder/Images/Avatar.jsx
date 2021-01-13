import React from 'react'
import {UserDataContext} from '../.././../contexts/UserDataProvider';
import ImagePreview from './ImagePreview';
import UploadButton from './UploadButton';
import CropperModal from './CropperModal';

const Avatar = () => {
    const {userData} = React.useContext(UserDataContext);

    const [show, setShow] = React.useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            {
                userData.avatarUrl 
                ?  <ImagePreview src={userData,avatarUrl} />
                :<>
                    <UploadButton fileInputId="avatar" />
                    <CropperModal show={show} handleClose={handleClose} />
                 </> 
                
            }
        </>
    )
}

export default Avatar
