
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import api from '../services/api';
import {
  Container,
  Typography,
  Grid2,
  List,
  ListItem,
  IconButton,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const BillForm = () => {
  const [customerName, setCustomerName] = useState('');
  const [contactDetails, setContactDetails] = useState('');
  const [dateOfPurchase, setDateOfPurchase] = useState('');
  const [discount, setDiscount] = useState(0);
  const [items, setItems] = useState([{ itemName: '', price: 0, quantity: 0 }]);

  const handleAddItem = () => {
    setItems([...items, { itemName: '', price: 0, quantity: 0 }]);
  };

  const handleRemoveItem = (index) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  };

  const handleItemChange = (index, field, value) => {
    const newItems = [...items];
    newItems[index][field] = value;
    setItems(newItems);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const billData = {
      customerName,
      contactDetails,
      dateOfPurchase,
      discount,
      items,
    };

    try {
      const response = await api.post('/bills', billData);
      console.log('Bill created:', response.data);
   
    } catch (error) {
      console.error('Error creating bill:', error);

    }
  };

  return (
    <Container maxWidth="md" style={{ marginTop: '20px' }}>
      <Typography variant="h4" gutterBottom>
        Create New Bill
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid2 container spacing={2}>
          <Grid2 item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Customer Name"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
              required
            />
          </Grid2>
          <Grid2 item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Contact Details"
              value={contactDetails}
              onChange={(e) => setContactDetails(e.target.value)}
            />
          </Grid2>
          <Grid2 item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Date of Purchase"
              type="date"
              InputLabelProps={{
                shrink: true,
              }}
              value={dateOfPurchase}
              onChange={(e) => setDateOfPurchase(e.target.value)}
              required
            />
          </Grid2>
          <Grid2 item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Discount"
              type="number"
              value={discount}
              onChange={(e) => setDiscount(parseFloat(e.target.value))}
            />
          </Grid2>

          <Grid2 item xs={12}>
            <Typography variant="h6">Items Purchased</Typography>
            <List>
              {items.map((item, index) => (
                <ListItem key={index}>
                  <TextField
                    label="Item Name"
                    value={item.itemName}
                    onChange={(e) =>
                      handleItemChange(index, 'itemName', e.target.value)
                    }
                    style={{ marginRight: '10px' }}
                    required
                  />
                  <TextField
                    label="Price"
                    type="number"
                    value={item.price}
                    onChange={(e) =>
                      handleItemChange(index, 'price', parseFloat(e.target.value))
                    }
                    style={{ marginRight: '10px' }}
                    required
                  />
                  <TextField
                    label="Quantity"
                    type="number"
                    value={item.quantity}
                    onChange={(e) =>
                      handleItemChange(index, 'quantity', parseInt(e.target.value))
                    }
                    style={{ marginRight: '10px' }}
                    required
                  />
                  <IconButton onClick={() => handleRemoveItem(index)}>
                    <DeleteIcon />
                  </IconButton>
                </ListItem>
              ))}
            </List>
            <Button variant="contained" color="primary" onClick={handleAddItem}>
              Add Item
            </Button>
          </Grid2>

          <Grid2 item xs={12}>
            <Button type="submit" variant="contained" color="success">
              Create Bill
            </Button>
          </Grid2>
        </Grid2>
      </form>
    </Container>
  );
};

export default BillForm;