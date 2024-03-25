import React from 'react';

import Footer from '../Footer/Footer';
import DetailPanel from '../DetailPanel/DetailPanel';
import ProductListPanel from '../ProductListPanel/ProductListPanel';
import TotalPanel from '../TotalPanel/TotalPanel';
import CategoryPanel from '../CategoryPanel/CategoryPanel';

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <ProductListPanel />
      <DetailPanel />
      <CategoryPanel />
      <TotalPanel />
      <Footer />
    </div>
  );
};

export default Dashboard;
