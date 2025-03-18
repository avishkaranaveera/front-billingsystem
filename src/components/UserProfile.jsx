
import React, { useState, useEffect } from 'react';
import {
  Container,
  Typography,
  Paper,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import api from '../services/api';

const UserProfile = () => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await api.get('/users/profile');
        setProfile(response.data);
      } catch (error) {
        console.error('Error fetching profile:', error);
      }
    };

    fetchProfile();
  }, []);

  if (!profile) {
    return <Typography>Loading profile...</Typography>;
  }

  return (
    <Container maxWidth="md" style={{ marginTop: '20px' }}>
      <Paper elevation={3} style={{ padding: '20px' }}>
        <Typography variant="h4" gutterBottom>
          User Profile
        </Typography>
        <Typography variant="h6">
          Username: {profile.username}
        </Typography>
        <Typography variant="h6">Email: {profile.email}</Typography>
        {profile.fullName && (
          <Typography variant="h6">Full Name: {profile.fullName}</Typography>
        )}

        <Typography variant="h5" style={{ marginTop: '20px' }}>
          Last 10 Bills
        </Typography>
        <List>
          {profile.lastTenBills.map((bill) => (
            <ListItem key={bill.id}>
              <ListItemText
                primary={`Bill ID: ${bill.id}`}
                secondary={`Customer: ${bill.customerName}, Amount: ${bill.totalAmount}`}
              />
            </ListItem>
          ))}
        </List>
      </Paper>
    </Container>
  );
};

export default UserProfile;