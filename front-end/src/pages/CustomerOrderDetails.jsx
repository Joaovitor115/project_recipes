import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import NavBar from '../components/NavBar';
import Pedido from '../components/CustomerPedido';
import formatPrice from '../utils/formatPrice';
import formatDate from '../utils/formatDate';

function CustomerOrderDetails({ match }) {
  const [pedido, setPedido] = useState();
  const [seller, setSeller] = useState();
  const dId = 'customer_order_details__element-order-details-label-delivery-status';
  useEffect(() => {
    const { params: { id } } = match;
    const response = async () => {
      const result = await fetch(`http://localhost:3001/sale/${id}`);
      const data = await result.json();
      const apiSeller = await fetch(`http://localhost:3001/user/${data.sellerId}`);
      const sellerApi = await apiSeller.json();
      setSeller(sellerApi.name);
      setPedido(data);
    };
    response();
  }, [match]);

  const alteraStatus = () => {
    if (pedido.status !== 'ENTREGUE') setStatus('ENTREGUE');
  };

  if (!pedido) {
    return (<div>Loading...</div>);
  }

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
          {seller}
        </h1>
        <h1
          data-testid="customer_order_details__element-order-details-label-order-date"
        >
          {formatDate(pedido.saleDate)}
        </h1>
        <h1
          data-testid={ dId }
        >
          {pedido.status}
        </h1>
        <button
          type="button"
          onClick={ alteraStatus }
          data-testid="customer_order_details__button-delivery-check"
          disabled="true"
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
      <div
        data-testid="customer_order_details__element-order-total-price"
      >
        {`Total: R$ ${formatPrice(pedido.totalPrice)}`}
      </div>
    </div>
  );
}

CustomerOrderDetails.propTypes = PropTypes.shape({}).isRequired;

export default CustomerOrderDetails;
