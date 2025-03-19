
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import CreateBill from './pages/CreateBill';
import Revenue from './pages/Revenue';
import Login from './components/Login';
import Register from './components/Register';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function App() {
  const token = localStorage.getItem('token');

  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/login';
  };

  return (
    <Router>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Bill Receipt App
          </Typography>
          {token ? (
            <>
              <Button color="inherit" component={Link} to="/">
                Home
              </Button>
              <Button color="inherit" component={Link} to="/profile">
                Profile
              </Button>
              <Button color="inherit" component={Link} to="/create">
                Create Bill
              </Button>
              <Button color="inherit" component={Link} to="/revenue">
                Revenue
              </Button>
              <Button color="inherit" onClick={handleLogout}>
                Logout
              </Button>
            </>
          ) : (
            <>
            <Button 
              sx={{ 
                backgroundColor: '#BAD6F1', 
                color: 'black', 
                '&:hover': { backgroundColor: '#a1157e',color: 'white' }, 
                marginRight: 2 // Adds space between buttons
              }} 
              component={Link} 
              to="/login"
            >
              Login
            </Button>

            <Button 
              sx={{ 
                backgroundColor: '#113253', 
                color: 'white', 
                '&:hover': { backgroundColor: '#e68900' } 
              }} 
              component={Link} 
              to="/register"
            >
              Register
            </Button>


            </>
          )}
        </Toolbar>
      </AppBar>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/create" element={ <CreateBill /> } />
        <Route path="/revenue" element={<Revenue /> } />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;