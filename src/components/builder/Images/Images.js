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

    return (
        <>
          <UploadImage 
          updateContextProperty={updateAvatarImageUrl} 
          imageWidth={300} 
          imageHeight={300} 
          imagePreviewUrl={userData.avatarImageUrl}
          previewWidth={150}
          showDeleteButton={true}
          />  
        </>
    )
}

export default Images
