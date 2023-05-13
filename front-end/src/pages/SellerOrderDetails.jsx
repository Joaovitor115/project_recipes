import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Pedido from '../components/SellerPedido';
import formatPrice from '../utils/formatPrice';
import formatDate from '../utils/formatDate';
import NavBarSeller from '../components/NavBarSeller';

function SellerOrderDetails({ match }) {
  const [pedido, setPedido] = useState();
  const [reload, setReload] = useState();
  const [user, setUser] = useState();

  const dId = 'seller_order_details__element-order-details-label-delivery-status';
  useEffect(() => {
    const { params: { id } } = match;
    const response = async () => {
      const result = await fetch(`http://localhost:3001/sale/${id}`);
      const data = await result.json();
      setPedido(data);
    };
    response();
    setUser(JSON.parse(localStorage.getItem('user')));
  }, [match, reload]);

  if (!pedido) {
    return (<div>Loading...</div>);
  }

  const changeStatus = async (event) => {
    const { target: { name } } = event;
    const { params: { id } } = match;
    await fetch(`http://localhost:3001/sale/${id}`, {
      method: 'PATCH',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json',
        Authorization: user.token,
      },
      referrerPolicy: 'no-referrer',
      body: JSON.stringify({ status: name }),
    });
    setReload((prev) => !prev);
  };

  return (
    <div>
      <NavBarSeller />
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
          name="Preparando"
          onClick={ changeStatus }
          data-testid="seller_order_details__button-preparing-check"
          disabled={ pedido.status !== 'Pendente' }
        >
          PREPARAR PEDIDO
        </button>
        <button
          type="button"
          name="Em Trânsito"
          onClick={ changeStatus }
          data-testid="seller_order_details__button-dispatch-check"
          disabled={ pedido.status !== 'Preparando' }
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
