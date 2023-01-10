import * as React from 'react';
import { Grid, Slider, Typography } from '@mui/material';
import DropsAnimation from '../components/DropsAnimation';
import RainMessages from '../components/RainMessages';
import Logo from '../components/Logo';
import Questionnaire from '../components/Questionnaire';

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

const gridContainer = {
  minHeight: "95vh",
  '@media (min-width: 780px)': {
    minHeight: "100vh"
  }
};

export default function HomePage() {
  const initDropSlider = 10;
  const [drops, setDrops] = React.useState(initDropSlider);
  const [isRighteous, setIsRighteous] = React.useState(false);
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

  const handleQuestionnaireChange = (righteous: boolean) => {
    setIsRighteous(righteous);
  }

  return (
    <>
      <Grid
        container
        display="flex"
        justifyContent="space-between"
        alignContent="center"
        flexDirection="column"
        paddingTop={2}
        paddingBottom={5}
        paddingLeft={5}
        paddingRight={5}
        sx={gridContainer}
      >
        <Grid item>
          <Typography variant="h4" id="home-content" textAlign="center" noWrap={false}>
            משיב הרוח ומוריד הגשם
          </Typography>

          <Typography variant="body2" id="home-content" textAlign="center" noWrap={false}>
            האתר לחיזוק המורשת היהודית, בארץ הקודש ובתפוצות. הקניית ידע,  התמצאות ותחושת "בית" בתרבות ישראל. יצירת תחושת שייכות ואחריות לעם, למדינה ולתרבות ישראל.
          </Typography>
        </Grid>
        <Grid item alignSelf="center">
          <Questionnaire onChange={handleQuestionnaireChange}/>
        </Grid>
        <Grid item alignSelf="center">
          <Logo numOfDrops={sliderValue} righteous={isRighteous}/>
        </Grid>
        <Grid item>
          <Grid container flexDirection="column">
            <Grid item>
              <RainMessages numOfDrops={sliderValue} />
            </Grid>
            <Grid item paddingTop={5} paddingBottom={2}>
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
