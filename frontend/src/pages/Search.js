import React from 'react';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {
  const handleSearch = () => {
    // Implement your search logic here
    console.log('Search button clicked');
  };

  return (
    <div style={{ marginTop: '125px', marginLeft: '20%', width: '60%' }}>
      <TextField
        label="Search for restaurants and food"
        variant="outlined"
        fullWidth
        sx={{
          '& .MuiOutlinedInput-root': {
            borderRadius: '5px', // Adjust the border radius as needed
          },
        }}
        InputProps={{
          endAdornment: (
            <IconButton onClick={handleSearch}>
              <SearchIcon />
            </IconButton>
          ),
        }}
      />
    </div>
  );
};

export default SearchBar;
