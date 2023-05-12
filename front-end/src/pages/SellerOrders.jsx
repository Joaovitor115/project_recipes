import React, { useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
import Orders from '../components/Orders';

function SellerOrders() {
  const [data, setData] = useState([]);
  const endpoint = 'http://localhost:3001/sale';
  useEffect(() => {
    async function getSales(url) {
      const response = await fetch(url);
      const sale = await response.json();
      console.log('sale', sale);
      setData(sale);
    }
    getSales(endpoint);
  }, []);

  return (
    <div>
      <NavBar />

      {data.map((item) => (
        <Orders key={ item.id } { ...item } />
      ))}
    </div>
  );
}

export default SellerOrders;
