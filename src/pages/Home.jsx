
import React from 'react';
import BillList from '../components/BillList';

const Home = () => {
  return (
    <div className="container">
      <h1>Welcome to Bill Receipt App</h1>
      <BillList />
    </div>
  );
};

export default Home;