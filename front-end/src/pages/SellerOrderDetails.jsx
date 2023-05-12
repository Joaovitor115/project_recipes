import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import NavBar from '../components/NavBar';
import Pedido from '../components/SellerPedido';
import formatPrice from '../utils/formatPrice';
import formatDate from '../utils/formatDate';

function SellerOrderDetails({ match }) {
  const [pedido, setPedido] = useState();

  const dId = 'seller_order_details__element-order-details-label-delivery-status';
  useEffect(() => {
    const { params: { id } } = match;
    const response = async () => {
      const result = await fetch(`http://localhost:3001/sale/${id}`);
      const data = await result.json();
      setPedido(data);
    };
    response();
  }, [match]);

  if (!pedido) {
    return (<div>Loading...</div>);
  }

  return (
    <div>
      <NavBar />
      <p>Detalhe do Pedido</p>
      <section>
        <h1
          data-testid="seller_order_details__element-order-details-label-order-id"
        >
          {pedido.id}
        </h1>
        <h1
          data-testid="seller_order_details__element-order-details-label-order-date"
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
          // onClick={ alteraStatus }
          data-testid="seller_order_details__button-preparing-check"
          disabled="true"
        >
          PREPARAR PEDIDO
        </button>
        <button
          type="button"
          // onClick={ alteraStatus }
          data-testid="seller_order_details__button-dispatch-check"
          disabled="true"
        >
          SAIU PARA ENTREGA
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
        data-testid="seller_order_details__element-order-total-price"
      >
        {`Total: R$ ${formatPrice(pedido.totalPrice)}`}
      </div>
    </div>
  );
}

SellerOrderDetails.propTypes = PropTypes.shape({}).isRequired;

export default SellerOrderDetails;
