import React from 'react';
import PropTypes from 'prop-types';

export default function Pedido(
  { pedido: { id, name, quantidade, price }, indice: { index } },
) {
  return (
    <tr>
      <td
        data-testid={
          `customer_order_details__element-order-table-item-number-${index}`
        }
      >
        {id}
      </td>
      <td
        data-testid={
          `customer_order_details__element-order-table-name-${index}`
        }
      >
        {name}
      </td>
      <td
        data-testid={
          `customer_order_details__element-order-table-quantity-${index}`
        }
      >
        {quantities}
      </td>
      <td
        data-testid={
          `customer_order_details__element-order-table-unit-price-${index}`
        }
      >
        {price}
      </td>
      <td
        data-testid={
          `customer_order_details__element-order-table-sub-total-${index}`
        }
      >
        {price * quantidade}
      </td>
    </tr>
  );
}

Pedido.propTypes = {
  pedido: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    quantidade: PropTypes.number,
    price: PropTypes.number,
  }).isRequired,
  indice: PropTypes.shape({
    index: PropTypes.number,
  }).isRequired,
};
