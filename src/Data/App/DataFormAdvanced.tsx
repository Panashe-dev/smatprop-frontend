import React, { useState } from 'react';

import 'react-phone-input-2/lib/style.css'
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import 'react-dual-listbox/lib/react-dual-listbox.css';


// File Upload 1


// Month


export function MonthPicker() {
  const [value, setValue] = React.useState<Date | null>(new Date());

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        views={['month']}
        minDate={new Date('2012-03-01')}
        maxDate={new Date('2023-06-01')}
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        // renderInput={(params) => <TextField {...params} helperText={null} />}
      />
    </LocalizationProvider>
  );
}

