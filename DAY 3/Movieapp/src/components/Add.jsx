import * as React from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

function Add() {
  return (
    <div>
        <Stack spacing={2} direction="column" alignItems="flex-start">
            <TextField id="outlined-basic" label="Name"  />
            <TextField id="outlined-basic" label="Category"  />
            <TextField id="outlined-basic" label="Director" />
            <TextField id="outlined-basic" label="Release_year" />
            <TextField id="outlined-basic" label="Image" />
        </Stack><br/>
        <Stack spacing={2} direction="row">
            <Button variant="contained">Submit</Button>
        </Stack>
    </div>
  );
}

export default Add;