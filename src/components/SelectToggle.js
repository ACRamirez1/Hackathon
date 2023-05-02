import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BasicSelect(props) {
    const [stories, setStories] = React.useState(0);

    const handleChange = (event) => {
        setStories(event.target.value);

    };

    const dropValue = () => {
        if (stories === 30) {
            props.setAuthor(true)
        } else if (stories !== 30) {
            props.setAuthor(false)
        }
    }

    return (
        <div style={{
            width: '85%',

        }}>
            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                minWidth: 120,
                backgroundColor: 'rgb(246,246,239)'
            }} >
                <FormControl fullWidth style={{

                    maxWidth: 200,
                    height: '50px',
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
                        onChange={(e) => handleChange(e)}
                    >
                        <MenuItem value={10}>All</MenuItem>
                        <MenuItem value={20}>Stories</MenuItem>
                        <MenuItem value={30}>Author</MenuItem>
                    </Select>
                    {dropValue()}
                </FormControl>
            </Box>
        </div>
    );
}