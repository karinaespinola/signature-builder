import React from 'react';
import {UserDataContext} from '../../../contexts/UserDataProvider';
import UploadImage from './UploadImage';
import AddImageLink from './AddImageLink';

const Images = () => {
  const {userData, updateUserData} = React.useContext(UserDataContext);
  const [avatarImageUrl, setAvatarImageUrl] = React.useState(null);

  const updateAvatarImageUrl = (url) => {
    setAvatarImageUrl(url);
    updateUserData({...userData, avatarImageUrl: url});
  }
  
  const handleDeleteButton = (event) => {
    setAvatarImageUrl(null);
    updateUserData({...userData, avatarImageUrl: null})
  }

    return (
        <>
          <UploadImage 
          updateContextProperty={updateAvatarImageUrl} 
          imageWidth={300} 
          imageHeight={300} 
          imagePreviewUrl={userData.avatarImageUrl}
          previewWidth={150}
          showDeleteButton={true}
          handleDeleteButton={handleDeleteButton}
          />  
        </>
    )
}

export default Images
