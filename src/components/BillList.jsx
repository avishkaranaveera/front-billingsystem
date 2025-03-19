
import React, { useState, useEffect } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Tooltip,
} from '@mui/material';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import api from '../services/api';

const BillList = () => {
  const [bills, setBills] = useState([]);

  useEffect(() => {
    const fetchBills = async () => {
      try {
        const response = await api.get('/bills');
        setBills(response.data);
      } catch (error) {
        console.error('Error fetching bills:', error);
      }
    };

    fetchBills();
  }, []);

  const handleDownloadPdf = async (billId) => {
    try {
      const response = await api.get(`/bills/${billId}/pdf`, {
        responseType: 'blob',
      });

      const file = new Blob([response.data], { type: 'application/pdf' });

 
      const fileURL = URL.createObjectURL(file);

      const link = document.createElement('a');
      link.href = fileURL;
      link.setAttribute('download', `bill_${billId}.pdf`); 
      document.body.appendChild(link);

  
      link.click();

   
      link.parentNode.removeChild(link);
      URL.revokeObjectURL(fileURL);
    } catch (error) {
      console.error('Error downloading PDF:', error);
    }
  };

  return (
    <TableContainer component={Paper} style={{ marginTop: '20px' }}>
      <Table aria-label="Bills Table">
         <TableHead   sx={{
            border: '2px solid black',
            borderBottom: '2px solid black' 
          }}
        >
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Customer Name</TableCell>
            <TableCell>Date of Purchase</TableCell>
            <TableCell>Total Amount</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {bills.map((bill) => (
            <TableRow key={bill.id}>
              <TableCell component="th" scope="row">
                {bill.id}
              </TableCell>
              <TableCell>{bill.customerName}</TableCell>
              <TableCell>{new Date(bill.dateOfPurchase).toLocaleDateString()}</TableCell>
              <TableCell>{bill.totalAmount}</TableCell>
              <TableCell>
                <Tooltip title="Download PDF">
                  <IconButton onClick={() => handleDownloadPdf(bill.id)}>
                    <FileDownloadIcon />
                  </IconButton>
                </Tooltip>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default BillList;