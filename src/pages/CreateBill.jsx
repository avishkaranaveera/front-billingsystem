
import React from 'react';
import BillForm from '../components/BillForm';
import { Grid2 } from '@mui/material';

const CreateBill = () => {
  return (

<Grid2 className="container" sx={{  padding: 2 }}>
  <BillForm />
</Grid2>
  )
};

export default CreateBill;