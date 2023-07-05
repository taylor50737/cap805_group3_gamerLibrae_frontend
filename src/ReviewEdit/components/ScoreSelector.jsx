import { useEffect, useState } from 'react';
import { Box, Grid, Slider } from '@mui/material';
import { Score } from '../../shared/components/Score';

const green = 'rgba(0, 255, 159, 1)';
const yellow = 'rgba(255, 245, 0, 1)';
const red = 'rgba(231, 77, 77, 1)';
const greenScore = 70;
const yellowScore = 40;

export const ScoreSelector = ({ onScoreChange }) => {
  const [value, setValue] = useState(yellowScore);

  // Inform parent the default score when ScoreSelector initially loaded
  useEffect(() => {
    onScoreChange(value);
  }, []);

  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
    onScoreChange(newValue);
  };

  const getColor = (value) => {
    if (value > greenScore) {
      return green;
    } else if (value > yellowScore) {
      return yellow;
    } else {
      return red;
    }
  };
  return (
    <Box sx={{ width: '100%' }}>
      <Grid container spacing={2} alignItems='center'>
        <Grid item xs>
          <Slider
            value={typeof value === 'number' ? value : 0}
            onChange={handleSliderChange}
            aria-labelledby='input-slider'
            step={5}
            min={0}
            max={100}
            sx={{
              '.MuiSlider-thumb': {
                color: '#d7dbe0',
                height: 30,
                width: 30,
              },
              '.MuiSlider-track': {
                color: getColor(value),
                height: 25,
              },
              '.MuiSlider-rail': {
                height: 25,
                bgcolor: 'black',
              },
            }}
          />
        </Grid>
        <Grid item>
          <Score score={value} size={100} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ScoreSelector;
