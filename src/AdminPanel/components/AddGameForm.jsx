import { useState, useCallback } from 'react';

import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateField } from '@mui/x-date-pickers/DateField';
import {
  Autocomplete,
  Box,
  TextField,
  Checkbox,
  Chip,
  Button,
  Paper,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
} from '@mui/material';

import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

import dayjs from 'dayjs';
import Cropper from 'react-easy-crop';

import CustomButton from '../../shared/components/FormElements/CustomButton';
import CustomImageUpload from '../../shared/components/FormElements/CustomImageUpload';
import { CustomUseForm } from '../../shared/hooks/form-hook';
import { cropImage } from '../../shared/util/cropImage';

const cloud_name = 'dpfvhna2t';
const api_key = '133115664541957';

const genreChoosable = [
  'Action',
  'Adventure',
  'RPG',
  'Open World',
  'First Person Shooter',
  'Simulation',
  'Puzzlers',
];
const platformChoosable = ['Switch', 'PS5', 'PC', 'Xbox Series X'];
const playModeChoosable = ['Single-Player', 'Offline', 'Multi-Player', 'Online'];

const scrollBarStyle = {
  '&::-webkit-scrollbar': {
    width: '0.2em',
  },
  '&::-webkit-scrollbar-track': {
    background: '#19191a',
  },
  '&::-webkit-scrollbar-thumb': {
    bgcolor: '#888',
    borderRadius: '4px',
  },
  '&::-webkit-scrollbar-thumb:hover': {
    background: '#555',
  },
  scrollbarGutter: 'stable',
};

const DropdownPaper = ({ children }) => {
  return (
    <Paper
      sx={{
        bgcolor: '#2b2b2a',
        borderRadius: 2,
        '& .MuiAutocomplete-listbox': {
          color: 'white',
          '& .MuiAutocomplete-option': {
            py: 0,
          },
          "& .MuiAutocomplete-option[aria-selected='true']": {
            bgcolor: '#424140',

            '&.Mui-focused': {
              bgcolor: '#424140',
            },
          },
        },
        '& .MuiAutocomplete-listbox .MuiAutocomplete-option.Mui-focused': {
          bgcolor: '#403f3e',
        },
        overflowX: 'hidden',
        overflowY: 'auto',
        maxHeight: '250px',
        ...scrollBarStyle,
      }}
    >
      {children}
    </Paper>
  );
};

const MultiDropdownSelector = ({ categoryName, options, searchOption, setSearchOption }) => {
  return (
    <Autocomplete
      multiple
      disableCloseOnSelect
      options={options}
      getOptionLabel={(option) => option}
      value={searchOption}
      onChange={(event, newValues) => setSearchOption(newValues)}
      popupIcon={<ArrowDropDownIcon sx={{ color: '#b7b7b7' }} />}
      PaperComponent={DropdownPaper}
      renderOption={(props, option, { selected }) => (
        <li {...props}>
          <Checkbox
            icon={<CheckBoxOutlineBlankIcon fontSize='small' />}
            checkedIcon={<CheckBoxIcon fontSize='small' />}
            checked={selected}
            sx={{
              color: '#B7B7B7',
              '&.Mui-checked': {
                color: '#cfcecc',
              },
            }}
          />
          {option}
        </li>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          label={`Select ${categoryName}`}
          placeholder={`${categoryName}`}
          InputLabelProps={{ sx: { color: '#808080' } }}
          sx={{
            '& label.Mui-focused': {
              color: 'white',
            },
          }}
        />
      )}
      renderTags={(selectedTags, getTagProps) =>
        selectedTags.map((tag, i) => (
          <Chip
            key={i}
            variant='outlined'
            label={tag}
            {...getTagProps({ i })}
            sx={{
              border: 'none',
              bgcolor: '#9747ff',
              color: '#ffffff',
              '.MuiChip-label': { fontSize: '12px', px: '8px' },
              '.MuiChip-deleteIcon': { fontSize: '15px' },
            }}
          />
        ))
      }
      sx={{
        '& .MuiOutlinedInput-root': {
          color: 'white',
          '& fieldset': {
            borderWidth: '2px',
            borderRadius: '18px',
            borderColor: '#B7B7B7',
          },
          '&:hover fieldset': {
            borderColor: '#B7B7B7',
          },
          '&.Mui-focused fieldset': {
            borderColor: '#B7B7B7',
          },
        },
        '.MuiAutocomplete-clearIndicator': {
          color: '#B7B7B7',
        },
      }}
    />
  );
};

const CustomInputField = ({ categoryName, val, onChange }) => {
  return (
    <Box
      sx={{
        '& .MuiOutlinedInput-root': {
          color: 'white',
          '& fieldset': {
            borderWidth: '2px',
            borderRadius: '18px',
            borderColor: '#B7B7B7',
          },
          '&:hover fieldset': {
            borderColor: '#B7B7B7',
          },
        },
      }}
    >
      <TextField
        label={`${categoryName}`}
        placeholder={`${categoryName}`}
        InputLabelProps={{ sx: { color: '#808080' } }}
        value={val}
        onChange={onChange}
        sx={{
          minWidth: '100%',
          '& label.Mui-focused': {
            color: 'white',
          },
        }}
      />
    </Box>
  );
};

const UploadPic = () => {
  const [successSubmission, setSuccessSubmission] = useState('');
  const [formState, inputHandler, setFormData] = CustomUseForm(
    {
      image: {
        value: null,
        isValid: false,
      },
    },
    false,
  );

  const uploadPicSubmitHandler = async (event) => {
    event.preventDefault();

    const signatureResponse = await fetch('http://localhost:8080/api/cloudinary/signature');
    const signatureJson = await signatureResponse.json();

    const formData = new FormData();
    formData.append('file', formState.inputs.image.value);
    formData.append('api_key', api_key);
    formData.append('signature', signatureJson.signature);
    formData.append('timestamp', signatureJson.timestamp);

    const cloudinaryResponse = await fetch(
      `https://api.cloudinary.com/v1_1/${cloud_name}/auto/upload`,
      {
        method: 'POST',
        body: formData,
      },
    );
    const cloudinaryJson = await cloudinaryResponse.json();
    console.log(signatureJson.signature);
    console.log(cloudinaryJson);

    setSuccessSubmission('You have successfully uploaded your picture!');
  };

  return (
    <div className='flex max-w-lg flex-col items-center rounded-lg bg-gray-700'>
      {/* <h1 className='text-3xl'>Upload Game Picture</h1> */}
      <form
        className='flex flex-col items-center justify-center py-12'
        onSubmit={uploadPicSubmitHandler}
      >
        <CustomImageUpload center id='image' onInput={inputHandler} />
        <p className=''>{successSubmission}</p>
        <div className='auth--form--submit'>
          <CustomButton type='submit' disabled={!formState.isValid}>
            UPLOAD IMAGE
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

const AddGameForm = ({ extraSx }) => {
  const [name, setName] = useState('');
  const [developer, setDeveloper] = useState('');
  const [releaseDate, setReleaseDate] = useState(dayjs('2000-01-01'));
  const [genres, setGenres] = useState([]);
  const [platforms, setPlatforms] = useState([]);
  const [playModes, setPlayModes] = useState([]);
  const [banner, setBanner] = useState(null);
  const [portrait, setPortrait] = useState(null);

  const handleReset = () => {
    setName('');
    setDeveloper('');
    setReleaseDate(dayjs('2000-01-01'));
    setGenres([]);
    setPlatforms([]);
    setPlayModes([]);
  };

  const handleSubmit = async () => {
    const signatureResponse = await fetch('http://localhost:8080/api/cloudinary/signature');
    const signatureJson = await signatureResponse.json();

    const formData = new FormData();
    formData.append('file', banner);
    formData.append('api_key', api_key);
    formData.append('signature', signatureJson.signature);
    formData.append('timestamp', signatureJson.timestamp);

    const cloudinaryResponse = await fetch(
      `https://api.cloudinary.com/v1_1/${cloud_name}/auto/upload`,
      {
        method: 'POST',
        body: formData,
      },
    );
    const cloudinaryJson = await cloudinaryResponse.json();
    console.log(cloudinaryJson);

    console.log({
      name: name,
      developer: developer,
      releaseDate: releaseDate.toISOString(),
      genres: genres,
      platforms: platforms,
      playModes: playModes,
      banner: banner,
      portrait: portrait,
    });
  };

  return (
    <>
      {/* <UploadPic /> */}

      <Box
        sx={{
          ...extraSx,
          display: 'flex',
          flexDirection: 'column',
          borderRadius: 2,
          p: '10px',
          gap: '10px',
          bgcolor: '#',
          overflowX: 'auto',
          overflowY: 'auto',
          ...scrollBarStyle,
        }}
      >
        <CustomInputField
          categoryName='Game'
          val={name}
          onChange={(event) => setName(event.target.value)}
        />
        <CustomInputField
          categoryName='Developer'
          val={developer}
          onChange={(event) => setDeveloper(event.target.value)}
        />
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={['DateField']}>
            <DateField
              label='Release Date'
              placeholder='Release Date'
              value={releaseDate}
              onChange={(newDate) => setReleaseDate(newDate)}
              format='YYYY-MM-DD'
              InputLabelProps={{
                sx: {
                  color: '#808080',
                },
              }}
              sx={{
                width: '100%',
                '& .MuiOutlinedInput-root': {
                  color: 'white',
                  '& fieldset': {
                    borderWidth: '2px',
                    borderRadius: '18px',
                    borderColor: '#B7B7B7',
                  },
                  '&:hover fieldset': {
                    borderColor: '#B7B7B7',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#B7B7B7',
                  },
                },
              }}
            />
          </DemoContainer>
        </LocalizationProvider>

        <MultiDropdownSelector
          categoryName='Genre'
          options={genreChoosable}
          searchOption={genres}
          setSearchOption={setGenres}
        />
        <MultiDropdownSelector
          categoryName='Platform'
          options={platformChoosable}
          searchOption={platforms}
          setSearchOption={setPlatforms}
        />
        <MultiDropdownSelector
          categoryName='Mode'
          options={playModeChoosable}
          searchOption={playModes}
          setSearchOption={setPlayModes}
        />
      </Box>
      {/* <Typography>
        Please use .webp format to reduce image size, there is no validation at the moment. Banner will be in 16:9, Portrait will be in 3:4.
      </Typography> */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '20px',
          mb: '20px',
        }}
      >
        <ImageUploaderCropper
          name='Banner'
          aspectRatio={16 / 9}
          croppedImage={banner}
          setCroppedImage={setBanner}
        />
        <ImageUploaderCropper
          name='Portrait'
          aspectRatio={3 / 4}
          croppedImage={portrait}
          setCroppedImage={setPortrait}
        />

        <Button
          variant='contained'
          onClick={handleSubmit}
          sx={{
            width: '60%',
            bgcolor: '#D9D9D9',
            color: '#000000',
            ':hover': {
              bgcolor: '#33353d',
              color: 'white',
            },
          }}
        >
          Submit
        </Button>
      </Box>
    </>
  );
};

const ImageUploaderCropper = ({ name, aspectRatio, croppedImage, setCroppedImage }) => {
  const [imageSrc, setImageSrc] = useState(null);
  const [fileName, setFileName] = useState(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);

  const onFileChange = async (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      setFileName(file.name);
      let imageDataUrl = await readFile(file);
      setImageSrc(imageDataUrl);
      setDialogOpen(true);
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '10px',
      }}
    >
      <Typography sx={{ fontWeight: 800, fontSize: '24px' }}>{name}</Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px' }}>
        {/* Custom button that direct to the input element */}
        <Button
          sx={{
            bgcolor: '#4e5154',
            color: 'white',
            '&:hover': { bgcolor: '#1a1919' },
          }}
          onClick={() => document.getElementById(name).click()}
        >
          Upload
        </Button>
        <Typography>{fileName}</Typography>
        <input
          id={name}
          type='file'
          onChange={onFileChange}
          accept='image/webp'
          style={{ display: 'none' }}
        />
        <Button
          onClick={() => {
            setImageSrc(null);
            setCroppedImage(null);
            setFileName('');
            document.getElementById(name).value = '';
          }}
          sx={{ bgcolor: '#4e5154', color: 'white', '&:hover': { bgcolor: '#1a1919' } }}
        >
          Reset
        </Button>
      </Box>

      {/* Diaglog opens when image upload is detected */}
      <Dialog open={dialogOpen} maxWidth='md' fullWidth>
        <DialogTitle>Crop Your Image</DialogTitle>
        <DialogContent>
          <Box sx={{ position: 'relative', width: '100%', height: 300, background: '#333' }}>
            <Cropper
              image={imageSrc}
              crop={crop}
              zoom={zoom}
              aspect={aspectRatio}
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
            onClick={() =>
              cropImage(imageSrc, croppedAreaPixels, console.log).then((image) => {
                setCroppedImage(image);
                setDialogOpen(false);
              })
            }
            sx={{ bgcolor: '#4e5154', color: 'white', '&:hover': { bgcolor: '#1a1919' } }}
          >
            Crop
          </Button>
        </DialogActions>
      </Dialog>

      {/* Cropped image preview */}
      {croppedImage && (
        <img
          src={croppedImage}
          style={{
            height: 200,
            width: 200 * aspectRatio,
          }}
        />
      )}
    </Box>
  );
};

function readFile(file) {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => resolve(reader.result), false);
    reader.readAsDataURL(file);
  });
}

export default AddGameForm;
