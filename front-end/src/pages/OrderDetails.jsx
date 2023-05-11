import React, { useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
import Pedido from '../components/Pedido';

function OrderDetails() {
  const [pedido, setPedido] = useState([]);

  useEffect(() => {
    const response = async () => {
      const result = await fetch('http://localhost:3001/sale');
      const data = await result.json();
      setPedido(data);
    };
    response();
  }, []);
  console.log(pedido);

  const alteraStatus = () => {
    if (pedido.status !== 'ENTREGUE') setStatus('ENTREGUE');
  };

  return (
    <div>
      <NavBar />
      <p>Detalhe do Pedido</p>
      <section>
        <h1
          data-testid="customer_order_details__element-order-details-label-order-id"
        >
          {pedido.id}
        </h1>
        <h1
          data-testid="customer_order_details__element-order-details-label-seller-name"
        >
          {pedido.sellerId}
        </h1>
        <h1
          data-testid="customer_order_details__element-order-details-label-order-date"
        >
          {pedido.saleDate}
        </h1>
        <h1
          data-testid={
            `customer_order_details__element
            -order-details-label-delivery-status${pedido.pedido}`
          }
        >
          {pedido.status}
        </h1>
        <button
          type="button"
          onClick={ alteraStatus }
          data-testid="customer_order_details__button-delivery-check"
        >
          MARCAR COMO ENTREGUE
        </button>
      </section>
      <table>
        <tr>
          <th>Item</th>
          <th>Descrição</th>
          <th>Quantidade</th>
          <th>Valor Unitário</th>
          <th>Sub-total</th>
        </tr>
        {
          pedido.products.map((item, index) => (
            <Pedido
              key={ index }
              pedido={ item }
              indice={ index }
            />
          ))
        }
      </table>
      <div>
        {`Total: R$ ${pedido.totalPrice}`}
      </div>
    </div>
  );
}

export default OrderDetails;
