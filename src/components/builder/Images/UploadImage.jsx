import React from 'react'
import {UserDataContext} from '../../../contexts/UserDataProvider';
import ImagePreview from './ImagePreview';
import UploadButton from './UploadButton';
import CropImage from './CropImage';
import {storage} from '../../../firebase/firebase';
import {getFileName} from '../../../utilities/String';

const UploadImage = () => {
    const {userData, updateUserData} = React.useContext(UserDataContext);

    const [show, setShow] = React.useState(false);
    const [imageFile, setImageFile] = React.useState('');
    const [progress, setProgress] = React.useState(0);
    const [fileName, setFileName] = React.useState('avatar-image');
    const [uploading, setUploading] = React.useState(false);

    const handleFileChange = async (file) => {
        setImageFile(file);
        setShow(true);
        setFileName(getFileName(file.name));
    }

    const handleUpload = (croppedImage) => {
        const uploadTask = storage.ref(`images/${fileName}.png`).put(croppedImage);
        uploadTask.on(
          "state_changed",
          snapshot => {
            const currentProgress = Math.round(
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            );
            setProgress(currentProgress);
            setUploading(true);
          },
          error => {
            console.log(error);
            setProgress(0);
            setUploading(false);
          },
          () => {
            storage
              .ref("images")
              .child(fileName + '.png')
              .getDownloadURL()
              .then(url => {
                updateUserData({...userData, avatarImageUrl: url});
                setUploading(false);
                setProgress(0);
                setShow(false);
              });
          }
        );
      };

    return (
        <>
            {
                userData.avatarUrl 
                ?  <ImagePreview src={userData,avatarUrl} />
                :<>
                    <UploadButton fileInputId="avatar" handleFileChange={handleFileChange} setShow={setShow}/>
                    <CropImage show={show} imageFile={imageFile} setShow={setShow} handleUpload={handleUpload} progress={progress} uploading={uploading}/>
                </>               
            }
        </>
    )
}

export default UploadImage
