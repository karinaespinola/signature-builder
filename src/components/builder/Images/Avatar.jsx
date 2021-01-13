import React from 'react'
import {UserDataContext} from '../.././../contexts/UserDataProvider';
import ImagePreview from './ImagePreview';
import UploadButton from './UploadButton';

const Avatar = () => {
    const {userData} = React.useContext(UserDataContext);

    return (
        <>
            {
                userData.avatarUrl 
                ?  <ImagePreview src={userData,avatarUrl} />
                : <UploadButton />
            }
        </>
    )
}

export default Avatar
