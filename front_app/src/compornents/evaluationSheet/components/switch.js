import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { alpha, styled } from '@mui/material/styles';
import Switch from '@mui/material/Switch';

const SelfSwitch = styled(Switch)(({ theme }) => ({
  '& .MuiSwitch-switchBase.Mui-checked': {
    color: 'rgba(255,99,132,0.6)',
    '&:hover': {
      backgroundColor: alpha('rgba(255,99,132,0.6)', theme.palette.action.hoverOpacity),
    },
  },
  '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
    backgroundColor: 'rgba(255,99,132,0.6)',
  },
}));

const BossSwitch = styled(Switch)(({ theme }) => ({
  '& .MuiSwitch-switchBase.Mui-checked': {
    color: 'rgba(54,162,235,0.6)',
    '&:hover': {
      backgroundColor: alpha('rgba(54,162,235,0.6)', theme.palette.action.hoverOpacity),
    },
  },
  '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
    backgroundColor: 'rgba(54,162,235,0.6)',
  },
}));

const FinalSwitch = styled(Switch)(({ theme }) => ({
  '& .MuiSwitch-switchBase.Mui-checked': {
    color: 'rgba(178,255,102,0.6)',
    '&:hover': {
      backgroundColor: alpha('rgba(178,255,102,0.6)', theme.palette.action.hoverOpacity),
    },
  },
  '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
    backgroundColor: 'rgba(178,255,102,0.6)',
  },
}));

const label = { inputProps: { 'aria-label': 'Switch' } };

export default function ColorSwitches(props) {
  const { raderChecked, changeRaderType } = props;
  const handleChange = (event) => {
    changeRaderType({ raderType: event.target.value, checked: event.target.checked });
  };

  return (
    <div className='container switch'>
      <FormGroup aria-label="position" row　>
        <FormControlLabel
          control={<SelfSwitch {...label} checked={raderChecked['self']} />}
          label='Self'
          value='self'
          onChange={handleChange}
        />
        <FormControlLabel
          control={<BossSwitch {...label} checked={raderChecked['boss']} />}
          label='Boss'
          value='boss'
          onChange={handleChange}
        />
        <FormControlLabel
          control={<FinalSwitch {...label} checked={raderChecked['final']} />}
          label='Final'
          value='final'
          onChange={handleChange}
        />
      </FormGroup>
    </div>
  );
}
