import React, { useEffect, useState } from 'react';
import { getProducts } from '../../services/config';

const TotalPanel = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts()
      .then((products) => setProducts(products))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h2>Products</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.title}</li>
        ))}
      </ul>
    </div>
  );
}
export default TotalPanel;

// Path: src/components/ProductsComponent/ProductsComponent.jsx