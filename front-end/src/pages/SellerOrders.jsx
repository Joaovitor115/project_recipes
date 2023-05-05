import React from 'react';

function SellerOrders() {
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

      <div>
        <h4 data-testid="seller_orders_element-order-id-<id>"> id 49</h4>
        <h1 data-testid="seller_orders_element-delivery-status<id>">
          PENDENTE
        </h1>
        <h2 data-testid="seller_orders_element-date-<id>">DATA DO PEDIDO</h2>
        <h2 data-testid="seller_orders_element-card-price<id>"> PREÇO </h2>
        <h3 data-testid="seller_orders_element-card-address-<id>">ENDEREÇO</h3>
      </div>
    </div>
  );
}

export default SellerOrders;
