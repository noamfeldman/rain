import * as React from 'react';
import { Grid, Slider, Typography } from '@mui/material';
import DropsAnimation from '../components/DropsAnimation';
import RainMessages from '../components/RainMessages';
import Logo from '../components/Logo';

const marks = [
  {
    value: 0,
    label: 'יהודי'
  },
  {
    value: 25,
    label: 'שחרית'
  },
  {
    value: 50,
    label: 'מנחה'
  },
  {
    value: 75,
    label: 'ערבית'
  },
  {
    value: 100,
    label: 'צדיק'
  }
];

const valuetext = (value: number) => {
  return `${value} Drops`;
};

export default function HomePage() {
  const initDropSlider = 10;
  const [drops, setDrops] = React.useState(initDropSlider);
  const [sliderValue, setSliderValue] = React.useState(initDropSlider);

  const onNumberOfDropsChangeHandler = (
    event: React.SyntheticEvent | Event,
    value: number | number[]
  ) => {
    if (!isNaN(Number(value))) {
      setDrops(Math.floor(Number(value) / 2));
      setSliderValue(Number(value));
    }
  };

  return (
    <>
      <Grid
        container
        display="flex"
        justifyContent="space-between"
        alignContent="center"
        flexDirection="column"
        height="100vh"
        paddingTop={2}
        paddingBottom={5}
        paddingLeft={5}
        paddingRight={5}
      >
        <Grid item>
          <Typography variant="h4" id="home-content" textAlign="center" noWrap={false}>
            משיב הרוח ומוריד הגשם
          </Typography>

          <Typography variant="body2" id="home-content" textAlign="center" noWrap={false}>
            האתר לחיזוק המורשת היהודית, בארץ הקודש ובתפוצות. הקניית ידע,  התמצאות ותחושת "בית" בתרבות ישראל. יצירת תחושת שייכות ואחריות לעם, למדינה ולתרבות ישראל.
          </Typography>

          <Typography variant="h6" id="home-content" textAlign="center" noWrap={false}>
            נראה לכם?
          </Typography>
        </Grid>


        {sliderValue === 100 &&
          <Grid item alignSelf="center">
            <Logo />
          </Grid>
        }

        <Grid item>
          <Grid container flexDirection="column" spacing={5}>
            <Grid item>
              <RainMessages numOfDrops={sliderValue} />
            </Grid>
            <Grid item>
              <Slider
                aria-label="Custom drops"
                defaultValue={initDropSlider}
                getAriaValueText={valuetext}
                valueLabelDisplay="off"
                marks={marks}
                onChangeCommitted={onNumberOfDropsChangeHandler}
                sx={{ zIndex: 2 }}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <DropsAnimation numOfDrops={drops * 2} />
    </>
  );
}
