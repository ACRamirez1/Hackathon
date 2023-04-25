import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BasicSelect() {
  const [stories, setStories] = React.useState('');

  const handleChange = (event) => {
    setStories(event.target.value);
  };

  return (
    <div style={{
        width: '85%'
    }}>
    <Box sx={{ 
        minWidth: 120,
        backgroundColor: 'rgb(246,246,239)'
        }} >
      <FormControl fullWidth style={{
        maxWidth: 200,
        height: '40px',
        margin: '20px 0 0 40px',
        // padding: '0'
      }}>
        <InputLabel id="demo-simple-select-label" 
        style={{
          height: '40px',
          margin: '-7px 0 0 0'
          // padding:  '0'
        }}>Stories</InputLabel>
        <Select style={{
          height: '40px',
          // padding:  '0'
        }}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={stories}
          label="stories"
          onChange={handleChange}
        >
          <MenuItem value={10}>All</MenuItem>
          <MenuItem value={20}>Stories</MenuItem>
          <MenuItem value={30}>Author</MenuItem>
        </Select>
      </FormControl>
    </Box>
    </div>
  );
}