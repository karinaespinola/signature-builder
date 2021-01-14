/* eslint-disable react/prop-types */
import React from 'react';
import Cropper from 'react-easy-crop';
import { getCroppedImg, getRotatedImage } from '../../../utilities/Canvas';
import { getOrientation } from 'get-orientation/browser';
import {Modal, Button, Form} from 'react-bootstrap';


const CropImage = (props) => {
    const {show, setShow, imageFile} = props;

    const ORIENTATION_TO_ANGLE = {
        '3': 180,
        '6': 90,
        '8': -90,
      }

      const [imageSrc, setImageSrc] = React.useState('');
      const [crop, setCrop] = React.useState({ x: 0, y: 0 })
      const [rotation, setRotation] = React.useState(0)
      const [zoom, setZoom] = React.useState(0.9)
      const [croppedAreaPixels, setCroppedAreaPixels] = React.useState(null)
      const [croppedImage, setCroppedImage] = React.useState(null)
      
      React.useEffect(() => {
          if(show) {
            readFile();
          }
      }, [show]);

      const readFile = async () => {
        let imageDataUrl = await convertToUrl();
        const orientation = await getOrientation(imageFile)
        const rotation = ORIENTATION_TO_ANGLE[orientation]
        if (rotation) {
          //imageDataUrl = await getRotatedImage(imageDataUrl, rotation)
        }
        setImageSrc(imageDataUrl);
      }

      const convertToUrl = () => {
        return new Promise(resolve => {
            const reader = new FileReader()
            reader.addEventListener('load', () => resolve(reader.result), false)
            reader.readAsDataURL(imageFile);
          })
      }
      const handleClose = () => setShow(false);
      const handleShow = () => setShow(true);
    return (
        <div>
            <Modal show={show} onHide={handleClose} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header closeButton></Modal.Header>
                <Modal.Body className="cropper">
                    <Cropper
                        image={imageSrc}
                        crop={crop}
                        rotation={rotation}
                        zoom={zoom}
                        aspect={1 / 1}
                        onCropChange={setCrop}
                        onRotationChange={setRotation}
                        onZoomChange={setZoom}
                    />
                    <Form>
                        <Form.Group controlId="formBasicRange">
                            <Form.Label>Range</Form.Label>
                            <Form.Control type="range" />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default CropImage
