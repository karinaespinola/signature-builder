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

  const handleAvatarUploadComplete = (data) => {
    updateUserData({
      ...userData, 
      avatarImageUrl : data.url,
      avatarImageFileName: data.fileName
    });
  }

  const handleBannerUploadComplete = (data) => {
    updateUserData({
      ...userData, 
      bannerUrl : data.url,
      bannerImageFileName: data.fileName,
      customBanner : true
    });
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
    storage.ref("images").child(userData.bannerImageFileName).delete()
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

    return (
        <>
          <h4>Avatar</h4>
          <UploadImage
          fileInputId={"avatar"}
          onUploadComplete={handleAvatarUploadComplete} 
          imageWidth={300} 
          imageHeight={300} 
          imagePreviewUrl={userData.avatarImageUrl}
          showPreview={true}
          previewWidth={150}
          showDeleteButton={true}
          handleDeleteButton={handleAvatarDeleteButton}
          aspectTop={1}
          aspectBottom={1}
          />

          <AddImageLink updateImageLink={updateAvatarLink} link={userData.avatarImageLink} />

          <hr></hr>
          
          <h4>Banner</h4>
          <BannerDropDown />
          <UploadImage 
            fileInputId={"banner"}
            onUploadComplete={handleBannerUploadComplete}  
            imageWidth={300} 
            imageHeight={42} 
            imagePreviewUrl={userData.bannerUrl}
            showPreview={userData.customBanner}
            previewWidth={300}
            showDeleteButton={true}
            handleDeleteButton={handleBannerDeleteButton}
            aspectTop={50}
            aspectBottom={7}
          />

          <AddImageLink updateImageLink={updateBannerLink} link={userData.bannerImageLink}/>
        </>
    )
}

export default Images
