import React from 'react';
import {UserDataContext} from '../../../contexts/UserDataProvider';
import UploadImage from './UploadImage';
import AddImageLink from './AddImageLink';
import {storage} from '../../../firebase/firebase';
import BannerDropDown from './BannerDropDown';

const Images = () => {
  const {userData, updateUserData} = React.useContext(UserDataContext);
  const [avatarFileName, setAvatarFileName] = React.useState(null);
  const [bannerImageUrl, setBannerImageUrl] = React.useState(null);
  const [bannerFileName, setBannerFileName] = React.useState(null);


  const updateAvatarImageUrl = (url) => {
    const object = {avatarImageUrl: url}
    updateUserData({...userData, ...object});
  }

  const updateAvatarImageFileName = (name) => {
    setAvatarFileName(name)
    const object = {avatarImageFileName: name}
    updateUserData({...userData, ...object});
  }
  
  const handleAvatarDeleteButton = (event) => {
    storage.ref("images").child(userData.avatarImageFileName).delete()
    .then(function() {
      updateUserData({...userData, avatarImageUrl: null})
      setAvatarFileName(null);
    }).catch(function(error) {
      console.log(error);
    });
  }

  const handleBannerDeleteButton = (event) => {
    storage.ref("images").child(avatarFileName).delete()
    .then(function() {
      setBannerImageUrl(null);
      updateUserData({...userData, bannerUrl: null})
      setBannerFileName(null);
    }).catch(function(error) {
      console.log(error);
    });
  }

  const updateAvatarLink = (link) => {
    updateUserData({...userData, avatarImageLink: link})
  }

  const updateBannerLink = (link) => {
    updateUserData({...userData, bannerImageLink: link})
  }

  const updateBannerImageUrl = (url) => {
    setBannerImageUrl(url);
    updateUserData({...userData, bannerUrl: url});
  }

    return (
        <>
          <h4>Avatar</h4>
          <UploadImage 
          updateContextProperty={updateAvatarImageUrl} 
          imageWidth={300} 
          imageHeight={300} 
          imagePreviewUrl={userData.avatarImageUrl}
          previewWidth={150}
          showDeleteButton={true}
          handleDeleteButton={handleAvatarDeleteButton}
          setFileName={updateAvatarImageFileName}
          aspectTop={1}
          aspectBottom={1}
          />

          <AddImageLink updateImageLink={updateAvatarLink} />

          <hr></hr>
          <h4>Banner</h4>
          <BannerDropDown />
          <UploadImage 
            updateContextProperty={updateBannerImageUrl} 
            imageWidth={300} 
            imageHeight={50} 
            imagePreviewUrl={userData.bannerUrl}
            previewWidth={300}
            showDeleteButton={true}
            handleDeleteButton={handleBannerDeleteButton}
            setFileName={setBannerFileName}
          />

          <AddImageLink updateImageLink={updateBannerLink} />
        </>
    )
}

export default Images
