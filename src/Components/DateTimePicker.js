import * as React from "react";
import dayjs from "dayjs";
import Stack from "@mui/material/Stack";
import utc from "dayjs/plugin/utc";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";

dayjs.extend(utc); 

export default function DateFrom({ onDateChange }) {
  const [value, setValue] = React.useState(null);

  const handleChange = (newValue) => {
    setValue(newValue);
    onDateChange(newValue);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Stack spacing={2} sx={{ minWidth: 300, marginBottom: "10px" }}>
        <DateTimePicker
          value={value}
          onChange={handleChange}
          referenceDate={null}
          format="YYYY-MM-DD HH:mm:ss"
        />
      </Stack>
    </LocalizationProvider>
  );
}

export function DateTo({ onDateChange }) {
  const [value, setValue] = React.useState(null);

  const handleChange = (newValue) => {
    setValue(newValue);
    onDateChange(newValue);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Stack spacing={2} sx={{ minWidth: 300, marginBottom: "10px" }}>
        <DateTimePicker
          value={value}
          onChange={handleChange}
          referenceDate={null}
          format="YYYY-MM-DD HH:mm:ss"
        />
      </Stack>
    </LocalizationProvider>
  );
}
