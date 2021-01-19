import React from 'react';
import {UserDataContext} from '../../../contexts/UserDataProvider';
import UploadImage from './UploadImage';
import AddImageLink from './AddImageLink';
import {storage} from '../../../firebase/firebase';

const Images = () => {
  const {userData, updateUserData} = React.useContext(UserDataContext);
  const [avatarImageUrl, setAvatarImageUrl] = React.useState(null);
  const [avatarFileName, setAvatarFileName] = React.useState(null);



  const updateAvatarImageUrl = (url) => {
    setAvatarImageUrl(url);
    updateUserData({...userData, avatarImageUrl: url});
  }
  
  const handleAvatarDeleteButton = (event) => {
    storage.ref("images").child(avatarFileName).delete()
    .then(function() {
      setAvatarImageUrl(null);
      updateUserData({...userData, avatarImageUrl: null})
      setAvatarFileName(null);
    }).catch(function(error) {
      console.log(error);
    });
  }

  const updateAvatarLink = (link) => {
    updateUserData({...userData, avatarImageLink: link})
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
          handleDeleteButton={handleAvatarDeleteButton}
          setFileName={setAvatarFileName}
          />

          <AddImageLink updateImageLink={updateAvatarLink} />  
        </>
    )
}

export default Images
