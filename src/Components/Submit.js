import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function Submit() {
  return (
    <Stack spacing={2} direction="row">

    <Button  type="submit" variant="contained" style={{ background: '#74121c', boxShadow: '2px 2px rgba(247, 245, 245, 0.819)'} }>
    <span>Show Results</span></Button>

  </Stack>
  );
}