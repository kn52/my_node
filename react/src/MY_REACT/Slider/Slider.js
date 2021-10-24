import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Home from '../../Home/Home';

const PrettoSlider = withStyles({
  root: {
    color: '#33b5e5',
    height: 8,
  },

  thumb: {
    height: 24,
    width: 24,
    backgroundColor: '#33b5e5',
    border: '4px solid #ffffff',
    marginTop: -8,
    marginLeft: -12,
    '&:focus, &:hover, &$active': {
      boxShadow: 'inherit',
    },
  },
  active: {},
  valueLabel: {
    marginTop: '10px',
    left: 'calc(-50% + 0px)',
    '& *': {
      background: 'transparent',
      color: '#000',
    },
  },
  track: {
    height: 8,
    borderRadius: 4,
  },
  rail: {
    height: 8,
    borderRadius: 4,
  },
})(Slider);

export default function CustomizedSlider() {
  const [value, setValue] = React.useState(2);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  console.log(value);
  return (
    <>
      <Home />
      <div style={{ marginTop: '90px', width: '900px', padding: '20px' }}>
        <PrettoSlider valueLabelDisplay="on" aria-label="pretto slider" defaultValue={20} />
        <Paper square>
      <Tabs
        value={value}
        indicatorColor="primary"
        textColor="primary"
        onChange={handleChange}
        aria-label="disabled tabs example"
      >
        <Tab label={<div style={{border:'1px solid',width:'20px',height:'30px'}}> Helllo</div>}>
          
        </Tab>
        <Tab label="Disabled" disabled />
        <Tab label="Active"/>
      </Tabs>
      {value === 0 && <div>Item One</div>}
    </Paper>
      </div>
    </>
  );
}
