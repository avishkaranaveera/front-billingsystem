
import React from 'react';
import RevenueSummary from '../components/RevenueSummary';
import { Grid2 } from '@mui/material';

const Revenue = () => {
  return (
<Grid2 className="container" sx={{ padding: 2 }}>
  <RevenueSummary />
</Grid2>

  );
};

export default Revenue;