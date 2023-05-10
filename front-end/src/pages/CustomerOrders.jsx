import React, { useEffect, useState } from 'react';

function CustomerOrders() {
  const [data, setData] = useState(0);
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
      <table>
        <tr>
          <td data-testid="customer_products_element-navbar-link-orders">
            Pedidos
          </td>
          <br />
          <td data-testid="customer_products_element-navbar-link-logout">
            Fulana Pereira
          </td>
          <td data-testid="customer_products_element-navbar-user-full-name">
            Sair
          </td>
        </tr>
      </table>

      { data ? (
        <ul>
          {data.map((item) => (
            <>
              <li data-testid={ `customer_orders_element-order-${item.id}>` }>
                { item.id }
              </li>
              <li data-testid={ `customer_orders_element-delivery-status-${item.id}>` }>
                { item.status }
              </li>
              <li data-testid={ `customer_orders_element-date-${item.id}>` }>
                { item.saleDate }
              </li>
              <li data-testid={ `customer_orders_element-card-price-${item.id}>` }>
                { item.totalPrice }
              </li>
            </>
          ))}
        </ul>
      ) : (<p> Loading </p>)}
    </div>
  );
}

export default CustomerOrders;
