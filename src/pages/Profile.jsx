
import React from 'react';
import UserProfile from '../components/UserProfile';
import { Grid2 } from '@mui/material';

const Profile = () => {
  return (
  <Grid2 className="container" sx={{ padding: 2 }}>
    <UserProfile />
  </Grid2>

  );
};

export default Profile;