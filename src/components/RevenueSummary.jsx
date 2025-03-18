
import React, { useState, useEffect } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from '@mui/material';
import api from '../services/api';

const RevenueSummary = () => {
  const [revenueData, setRevenueData] = useState([]);

  useEffect(() => {
    const fetchRevenueData = async () => {
      try {
        const response = await api.get('/bills/revenue/summary');
        setRevenueData(response.data);
      } catch (error) {
        console.error('Error fetching revenue data:', error);
      }
    };

    fetchRevenueData();
  }, []);

  return (
    <TableContainer component={Paper} style={{ marginTop: '20px' }}>
      <Typography variant="h5" gutterBottom>
        Monthly Revenue Summary
      </Typography>
      <Table aria-label="Revenue Summary Table">
        <TableHead>
          <TableRow>
            <TableCell>Month</TableCell>
            <TableCell>Year</TableCell>
            <TableCell>Total Income</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {revenueData.map((item) => (
            <TableRow key={`${item.year}-${item.month}`}>
              <TableCell>{item.month}</TableCell>
              <TableCell>{item.year}</TableCell>
              <TableCell>{item.totalIncome}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default RevenueSummary;