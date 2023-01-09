import * as React from 'react';
import { Grid, Slider, Typography } from '@mui/material';
import DropsAnimation from '../components/DropsAnimation';

const marks = [
  {
    value: 0,
    label: 'גוי'
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
  const onNumberOfDropsChangeHandler = (
    event: React.SyntheticEvent | Event,
    value: number | number[]
  ) => {
    if (!isNaN(Number(value))) {
      setDrops(Math.floor(Number(value) / 2));
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
        paddingTop={10}
        paddingBottom={10}
        paddingLeft={5}
        paddingRight={5}
      >
        <Grid item>
          <Typography variant="h3" id="home-content" textAlign="center" noWrap={false}>
            משיב הרוח ומוריד הגשם
          </Typography>
        </Grid>
        {drops === 50 &&
        <Grid item>
            <Typography variant="h6" id="home-content" textAlign="center" noWrap={false}>
              ישתבח שמו.... לעד!
            </Typography>
          </Grid>
        }
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
     
      <DropsAnimation numOfDrops={drops * 2} />
    </>
  );
}
