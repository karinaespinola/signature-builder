/* eslint-disable react/prop-types */
import React from 'react'
import ImagePreview from './ImagePreview';
import UploadButton from './UploadButton';
import CropImage from './CropImage';
import {storage} from '../../../firebase/firebase';
import {getFileName} from '../../../utilities/String';

const UploadImage = (props) => {
    const {updateContextProperty, imageWidth, imageHeight, imagePreviewUrl, previewWidth, showDeleteButton} = props;
    
    const [show, setShow] = React.useState(false);
    const [imageFile, setImageFile] = React.useState('');
    const [progress, setProgress] = React.useState(20);
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
            setProgress(20);
            setUploading(false);
          },
          () => {
            storage
              .ref("images")
              .child(fileName + '.png')
              .getDownloadURL()
              .then(url => {
                updateContextProperty(url);
                setUploading(false);
                setProgress(20);
                setShow(false);
              });
          }
        );
      };

    return (
        <>
            {
                imagePreviewUrl 
                ?  <ImagePreview src={imagePreviewUrl} previewWidth={previewWidth} showDeleteButton={showDeleteButton}/>
                :<>
                    <UploadButton fileInputId="avatar" handleFileChange={handleFileChange} setShow={setShow}/>
                    <CropImage 
                    show={show} 
                    imageFile={imageFile} 
                    setShow={setShow} 
                    handleUpload={handleUpload} 
                    progress={progress} 
                    uploading={uploading} 
                    imageWidth={imageWidth}
                    imageHeight={imageHeight}
                    />
                </>               
            }
        </>
    )
}

export default UploadImage
