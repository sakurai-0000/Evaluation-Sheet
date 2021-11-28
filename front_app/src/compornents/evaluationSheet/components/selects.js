import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';

export default function ControlledOpenSelect(props) {
  const { sheetNum, changeSheetType } = props;
  const [open, setOpen] = React.useState(false);
  const handleChange = (event) => {
    changeSheetType(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <Button sx={{ display: 'block', mt: 2 }} onClick={handleOpen}>
        Open the select
      </Button>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-controlled-open-select-label">Sheet</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={sheetNum}
          label="sheet"
          onChange={handleChange}
        >
          <MenuItem value={1}>１．開発技術：開発フェーズ</MenuItem>
          <MenuItem value={2}>２．PJ推進：案件マネジメント</MenuItem>
          <MenuItem value={3}>３．Non Title</MenuItem>
          <MenuItem value={4}>４．Non Title</MenuItem>
          <MenuItem value={5}>５．その他：勤怠、コミュニケーション等</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
