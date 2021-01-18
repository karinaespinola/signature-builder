import ImageBlobReduce from 'image-blob-reduce';
const reduce = new ImageBlobReduce();

const createImage = url =>
  new Promise((resolve, reject) => {
    const image = new Image()
    image.addEventListener('load', () => resolve(image))
    image.addEventListener('error', error => reject(error))
    image.setAttribute('crossOrigin', 'anonymous') // needed to avoid cross-origin issues on CodeSandbox
    image.src = url
  })

function getRadianAngle(degreeValue) {
  return (degreeValue * Math.PI) / 180
}

/**
 * This function was adapted from the one in the ReadMe of https://github.com/DominicTobias/react-image-crop
 * @param {File} image - Image File url
 * @param {Object} pixelCrop - pixelCrop Object provided by react-easy-crop
 * @param {number} rotation - optional rotation parameter
 * @param {boolean} round - optional if the crop is in round shape
 * @param {boolean} resize - optional if the image needs to be resized
 * @param {float} imageWidth - optional image's width for resizing
 * @param {float} imageHeight - optional image's height for resizing
 */
export async function getCroppedImg(imageSrc, pixelCrop, rotation = 0, round = false, resize = false) {
  const image = await createImage(imageSrc)
  const canvas = document.createElement('canvas')
  const ctx = canvas.getContext('2d')

  const maxSize = Math.max(image.width, image.height)
  const safeArea = 2 * ((maxSize / 2) * Math.sqrt(2))

  // set each dimensions to double largest dimension to allow for a safe area for the
  // image to rotate in without being clipped by canvas context
  canvas.width = safeArea
  canvas.height = safeArea

  // translate canvas context to a central location on image to allow rotating around the center.
  ctx.translate(safeArea / 2, safeArea / 2)
  ctx.rotate(getRadianAngle(rotation))
  ctx.translate(-safeArea / 2, -safeArea / 2)

  // draw rotated image and store data.
  ctx.drawImage(
    image,
    safeArea / 2 - image.width * 0.5,
    safeArea / 2 - image.height * 0.5
  )
  const data = ctx.getImageData(0, 0, safeArea, safeArea)

  // set canvas width to final desired crop size - this will clear existing context
  canvas.width = pixelCrop.width
  canvas.height = pixelCrop.height

  // paste generated rotate image with correct offsets for x,y crop values.
  ctx.putImageData(
    data,
    Math.round(0 - safeArea / 2 + image.width * 0.5 - pixelCrop.x),
    Math.round(0 - safeArea / 2 + image.height * 0.5 - pixelCrop.y)
  )

  if(round) {
    ctx.globalCompositeOperation = 'destination-in';
    ctx.beginPath();
    ctx.arc(pixelCrop.width/2,pixelCrop.height/2,pixelCrop.height/2,0,Math.PI*2);
    ctx.closePath();
    ctx.fill();
  }

  // As Base64 string
  //return canvas.toDataURL('image/png');
  if(!resize) {
      return new Promise((resolve, reject) => {
        canvas.toBlob(blob => {
            if (!blob) {
                //reject(new Error('Canvas is empty'));
                console.error("Canvas is empty");
                return;
            }
            blob.name = 'signature-image';
            console.log('Here at the cropping ' + blob);
            resolve(blob);
        }, "image/png");
    });
  }
  else {
    let resizedCanvas = resizeCanvas(canvas, imageWidth, imageHeight);
    return getCanvasBlob(resizedCanvas);
  }

   // // As a blob
  // return new Promise(resolve => {
  //   canvas.toBlob(file => {
  //     resolve(URL.createObjectURL(file))
  //   }, 'image/png')
  // })
}

export function getCanvasBlob(canvas) {
  return new Promise((resolve, reject) => {
    canvas.toBlob(blob => {
        if (!blob) {
            //reject(new Error('Canvas is empty'));
            console.error("Canvas is empty");
            return;
        }
        blob.name = 'signature-image';
        console.log('Here at the cropping ' + blob);
        resolve(blob);
    }, "image/png");
  });
}

export function resizeCanvas(originalCanvas, newWidth, newHeight) {
  let tmpCanvas = document.createElement('canvas');
  tmpCanvas.width = newWidth;
  tmpCanvas.height = newHeight;

  let ctx = tmpCanvas.getContext('2d');
  ctx.drawImage(originalCanvas,0,0,originalCanvas.width,originalCanvas.height,0,0,newWidth,newHeight);

  return tmpCanvas;
}

export async function getRotatedImage(imageSrc, rotation = 0) {
  const image = await createImage(imageSrc)
  const canvas = document.createElement('canvas')
  const ctx = canvas.getContext('2d')

  const orientationChanged =
    rotation === 90 || rotation === -90 || rotation === 270 || rotation === -270
  if (orientationChanged) {
    canvas.width = image.height
    canvas.height = image.width
  } else {
    canvas.width = image.width
    canvas.height = image.height
  }

  ctx.translate(canvas.width / 2, canvas.height / 2)
  ctx.rotate((rotation * Math.PI) / 180)
  ctx.drawImage(image, -image.width / 2, -image.height / 2)

  return new Promise(resolve => {
    canvas.toBlob(file => {
      resolve(URL.createObjectURL(file))
    }, 'image/jpeg')
  })
}

export async function reduceBlob(originalBlob) {
  await reduce
  .toBlob(originalBlob, { max: 300 })
  .then(blob => { 
    console.log(blob);
    return blob;
  });
}
