/* eslint-disable react/prop-types */
import React from 'react';
import Cropper from 'react-easy-crop';
import { getCroppedImg, getRotatedImage } from '../../../utilities/Canvas';
import { getOrientation } from 'get-orientation/browser';
import {Modal, Button, Form, Row, Col, ProgressBar} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquare, faCircle } from '@fortawesome/free-solid-svg-icons';


const CropImage = (props) => {
    const {
         show,
         setShow,
         imageFile,
         handleUpload,
         progress,
         uploading,
         imageWidth,
         imageHeight,
         aspectTop,
         aspectBottom
        } = props;

    const ORIENTATION_TO_ANGLE = {
        '3': 180,
        '6': 90,
        '8': -90,
      }
      const [imageSrc, setImageSrc] = React.useState('');
      const [cropShape, setCropShape] = React.useState('rect');
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
        let imageDataUrl = await convertToUrl(imageFile);
        const orientation = await getOrientation(imageFile)
        const rotation = ORIENTATION_TO_ANGLE[orientation]
        if (rotation) {
          //imageDataUrl = await getRotatedImage(imageDataUrl, rotation)
        }
        setImageSrc(imageDataUrl);
      }

      const convertToUrl = (file) => {
        return new Promise(resolve => {
            const reader = new FileReader()
            reader.addEventListener('load', () => resolve(reader.result), false)
            reader.readAsDataURL(file);
          })
      }
      const handleClose = () => setShow(false);

      const onCropComplete = React.useCallback((croppedArea, croppedAreaPixels) => {
        setCroppedAreaPixels(croppedAreaPixels)
      }, [])

      const handleSave = React.useCallback(async () => {
        try {
            const croppedImage = await getCroppedImg(
            imageSrc,
            croppedAreaPixels,
            rotation,
            cropShape === 'round' ? true : false,
            true,
            imageWidth,
            imageHeight
          )
          handleUpload(croppedImage);
        } catch (e) {
          console.error(e)
        }
      }, [imageSrc, croppedAreaPixels, rotation]);

    
    return (
        <div>
            <Modal show={show} onHide={handleClose} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header closeButton></Modal.Header>
                {
                    uploading
                    ? <Row style={{padding:'2em'}}>
                        <Col xs="12">
                            <ProgressBar now={progress} label={`${progress}%`} />
                        </Col>                    
                    </Row> 
                    : <div>
                        <Modal.Body className="cropper" >
                            <Cropper
                                image={imageSrc}
                                crop={crop}
                                rotation={rotation}
                                zoom={zoom}
                                aspect={aspectTop / aspectBottom}
                                onCropChange={setCrop}
                                onRotationChange={setRotation}
                                onZoomChange={setZoom}
                                cropShape={cropShape}
                                onCropComplete={onCropComplete}
                            />
                        </Modal.Body>
                        <Row style={{padding:'1em'}}>
                            <Col xs="12" sm="6">
                                <Form>
                                    <Form.Group controlId="formBasicRange">
                                        <Form.Label>Zoom</Form.Label>
                                        <Form.Control type="range" value={zoom} step={0.2} min={0} max={5} onChange={(e) => {setZoom(e.target.value)}} />
                                    </Form.Group> 
                                </Form>
                            </Col>
                            <Col xs="12" sm="6">
                                <Form>
                                    <Form.Group controlId="formBasicRange">
                                        <Form.Label>Rotation</Form.Label>
                                        <Form.Control type="range" step={1} min={0} max={360} value={rotation} onChange={(e) => {setRotation(e.target.value)}} />
                                    </Form.Group> 
                                </Form>
                            </Col>
                        </Row>
                        <Row style={{padding:'1em'}}>
                            <Col xs="12" sm="6">
                                <p>Shape</p>
                                <FontAwesomeIcon icon={faSquare} size="2x" className="mr-3" role="button" onClick={(e) => {setCropShape('rect')}}/>
                                <FontAwesomeIcon icon={faCircle} size="2x" role="button" onClick={(e) => {setCropShape('round')}}/>
                            </Col>
                        </Row>
                    </div>
                }
               



                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleSave}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default CropImage
