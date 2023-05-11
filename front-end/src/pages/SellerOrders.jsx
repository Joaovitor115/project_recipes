import React from 'react';
import NavBar from '../components/NavBar';

function SellerOrders() {
  return (
    <>
      <NavBar />
      <h4 data-testid="seller_orders_element-order-id-<id>"> id 49</h4>
      <h1 data-testid="seller_orders_element-delivery-status<id>">
        PENDENTE
      </h1>
      <h2 data-testid="seller_orders_element-date-<id>">DATA DO PEDIDO</h2>
      <h2 data-testid="seller_orders_element-card-price<id>"> PREÇO </h2>
      <h3 data-testid="seller_orders_element-card-address-<id>">ENDEREÇO</h3>
    </>
  );
}

export default SellerOrders;
