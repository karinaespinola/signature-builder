import React from 'react'
import {UserDataContext} from '../../../contexts/UserDataProvider';
import ImagePreview from './ImagePreview';
import UploadButton from './UploadButton';
import CropImage from './CropImage';

const UploadImage = () => {


    const {userData} = React.useContext(UserDataContext);

    const [show, setShow] = React.useState(false);
    const [imageFile, setImageFile] = React.useState('');

    const handleFileChange = async (file) => {
        setImageFile(file);
        setShow(true);
    }

    return (
        <>
            {
                userData.avatarUrl 
                ?  <ImagePreview src={userData,avatarUrl} />
                :<>
                    <UploadButton fileInputId="avatar" handleFileChange={handleFileChange} setShow={setShow}/>
                    <CropImage show={show} imageFile={imageFile} setShow={setShow}/>
                </>               
            }
        </>
    )
}

export default UploadImage
