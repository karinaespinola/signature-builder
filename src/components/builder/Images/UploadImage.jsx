import React from 'react'
import {UserDataContext} from '../../../contexts/UserDataProvider';
import ImagePreview from './ImagePreview';
import UploadButton from './UploadButton';
import CropImage from './CropImage';
import {storage} from '../../../firebase/firebase';

const UploadImage = () => {


    const {userData} = React.useContext(UserDataContext);

    const [show, setShow] = React.useState(false);
    const [imageFile, setImageFile] = React.useState('');
    const [imageBlob, setImageBlob] = React.useState('');
    const [imageUrl, setImageUrl] = React.useState('');
    const [progress, setProgress] = React.useState(0);

    const handleFileChange = async (file) => {
        setImageFile(file);
        setShow(true);
    }

    const handleUpload = (croppedImage) => {
        console.log('Here at the upload: ' + croppedImage);
        const uploadTask = storage.ref(`images/holi.png`).put(croppedImage);
        uploadTask.on(
          "state_changed",
          snapshot => {
            const progress = Math.round(
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            );
            setProgress(progress);
          },
          error => {
            console.log(error);
          },
          () => {
            storage
              .ref("images")
              .child('holi.png')
              .getDownloadURL()
              .then(url => {
                  console.log(url);
                setImageUrl(url);
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
                    <CropImage show={show} imageFile={imageFile} setShow={setShow} setImageBlob={setImageBlob} handleUpload={handleUpload}/>
                </>               
            }
        </>
    )
}

export default UploadImage
