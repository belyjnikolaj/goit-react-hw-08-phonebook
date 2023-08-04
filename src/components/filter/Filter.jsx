import { useDispatch, useSelector } from 'react-redux';
import { addFilter } from 'redux/filterSliсe';
import { selectFilter } from 'redux/selectors';
import { ThemeProvider } from '@emotion/react';
import { Box, InputAdornment, TextField, Typography, createTheme } from '@mui/material';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';

const theme = createTheme({
    palette: {
        primary: {
            main: '#5D4037',
        },
    }
});

const Filter = () => {
    const dispatch = useDispatch();
  
 const filter = useSelector(selectFilter);
    const handleChangeFilter = (e) => {
    dispatch(addFilter(e.target.value ));
  };
    return (
        <Box sx={{ maxWidth: 500, padding: '1vw 3vw' }}>
            <Typography variant="h6" gutterBottom>
                Find contacts by name
            </Typography>
            <ThemeProvider theme={theme}>
                <TextField
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <PersonSearchIcon />
                            </InputAdornment>
                        ),
                    }}
                    type="text"
                    label="Seach"
                    fullWidth
                    color='primary'
                    id="outlined-textarea"
                    placeholder="Seach..."                    
                    value={filter}
                    onChange={handleChangeFilter}
                />
            </ThemeProvider>
            </Box>
    )
}

export default Filter;