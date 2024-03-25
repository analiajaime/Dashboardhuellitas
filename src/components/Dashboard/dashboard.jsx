import React from 'react';

import Footer from '../Footer/footer';
import DetailPanel from '../DetailPanel/DetailPanel';
import ProductListPanel from '../ProductListPanel/ProductListPanel';

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <ProductListPanel />
      <DetailPanel />
      <Footer />
      
    </div>
  );
};

export default Dashboard;
