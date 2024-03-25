import React from 'react';
import TotalPanel from '../TotalPanel/TotalPanel';
import DetailPanel from '../DetailPanel/DetailPanel';
import CategoryPanel from '../CategoryPanel/CategoryPanel';
import ProductListPanel from '../ProductListPanel/ProductListPanel';

const Dashboard = () => {
  return (
    <div>
      <h1>SWAPI Dashboard</h1>
      <TotalPanel />
      <DetailPanel />
      <CategoryPanel />
      <ProductListPanel />
    </div>
  );
};

export default Dashboard;
