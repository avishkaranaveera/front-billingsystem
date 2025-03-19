
import React from 'react';
import BillList from '../components/BillList';
import { Grid2, Typography, Box } from '@mui/material';

const Home = () => {
  return (
    
<Grid2 className="container" sx={{  padding: 2 }}>
<Box 
  sx={{ 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center', 
    height: '10vh' 
  }}
>
  <Typography variant="h4">Welcome to Bill Receipt App</Typography>
</Box>
      <BillList />
    </Grid2>


  );
};

export default Home;