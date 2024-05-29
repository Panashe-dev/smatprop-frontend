import React from 'react';
import 'react-phone-input-2/lib/style.css'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import 'react-dual-listbox/lib/react-dual-listbox.css';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';



export function BasicDatePicker({value,setValue}) {
 

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        label="Start date"
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        // renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
}

export function BasicDatePicker2({value,setValue}) {
  
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        label="End Date"
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        // renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
}