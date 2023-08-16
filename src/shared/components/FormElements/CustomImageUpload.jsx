import { useRef, useState, useEffect, useCallback } from 'react';
import CustomButton from './CustomButton';

import Cropper from 'react-easy-crop';
import { cropImage } from '../../util/cropImage';
import {
  Box,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
} from '@mui/material';

import './CustomImageUpload.css';

const CustomImageUpload = (props) => {
  const [file, setFile] = useState();
  const [imageSrc, setImageSrc] = useState();
  const [previewUrl, setPreviewURL] = useState();
  const [isValid, setIsValid] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState();
  const [croppedImage, setCroppedImage] = useState();

  const filePickerRef = useRef();

  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);

  function readFile(file) {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.addEventListener('load', () => resolve(reader.result), false);
      reader.readAsDataURL(file);
    });
  }

  // useEffect(() => {
  //   if (!file) {
  //     return;
  //   }
  //   const fileReader = new FileReader();
  //   fileReader.onload = () => {
  //     setPreviewURL(fileReader.result);
  //   };
  //   fileReader.readAsDataURL(file);
  // }, [file]);

  const pickedHandler = async (event) => {
    let pickedFile;
    let fileIsValid = isValid;
    if (event.target.files && event.target.files.length === 1) {
      pickedFile = event.target.files[0];
      setFile(pickedFile);
      setIsValid(true);
      fileIsValid = true;
      let imageDataUrl = await readFile(pickedFile);
      setImageSrc(imageDataUrl);
      setDialogOpen(true);
    } else {
      setIsValid(false);
      fileIsValid = false;
    }
    // props.onInput(props.id, pickedFile, fileIsValid);
  };

  const pickImageHandler = () => {
    filePickerRef.current.click();
  };

  const handleCroppedImage = () => {
    cropImage(imageSrc, croppedAreaPixels, console.log).then((image) => {
      setCroppedImage(image);
      setDialogOpen(false);
      props.onInput(props.id, image, isValid);
    });
  };

  const resetImageHandler = () => {
    setImageSrc();
    setCroppedImage();
    setFile();
    setIsValid(false);
    props.onReset();
  };

  return (
    <div className='form-control'>
      <input
        id={props.id}
        ref={filePickerRef}
        style={{ display: 'none' }}
        type='file'
        accept='.jpg,.png,.jpeg,.webp'
        onChange={pickedHandler}
      />
      <div className={`image-upload ${props.center && 'center'}`}>
        <div className='image-upload__preview'>
          {croppedImage && (
            <img
              src={croppedImage}
              alt='Preview'
              style={{
                height: 208,
                width: 208,
              }}
            />
          )}
          {!croppedImage && <p>Please pick an image.</p>}
        </div>
        <div className='image--upload--button--section'>
          <CustomButton type='button' onClick={pickImageHandler}>
            PICK IMAGE
          </CustomButton>
          <CustomButton type='button' onClick={resetImageHandler}>
            RESET
          </CustomButton>
        </div>
        <div>
          <Dialog open={dialogOpen} maxWidth='md' fullWidth>
            <DialogTitle>Crop Your Image</DialogTitle>
            <DialogContent>
              <Box sx={{ position: 'relative', width: '100%', height: 300, background: '#333' }}>
                <Cropper
                  image={imageSrc}
                  crop={crop}
                  zoom={zoom}
                  aspect={3 / 3}
                  onCropChange={setCrop}
                  onCropComplete={onCropComplete}
                  onZoomChange={setZoom}
                />
              </Box>
            </DialogContent>
            <DialogActions>
              <Button
                onClick={() => setDialogOpen(false)}
                sx={{
                  bgcolor: '#4e5154',
                  color: 'white',
                  '&:hover': { bgcolor: '#1a1919' },
                }}
              >
                Cancel
              </Button>
              <Button
                onClick={handleCroppedImage}
                sx={{ bgcolor: '#4e5154', color: 'white', '&:hover': { bgcolor: '#1a1919' } }}
              >
                Crop
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      </div>
      {!isValid && <p>{props.errorText}</p>}
    </div>
  );
};

export default CustomImageUpload;
