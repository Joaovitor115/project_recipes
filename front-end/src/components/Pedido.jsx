import React from 'react';
import PropTypes from 'prop-types';
import formatPrice from '../utils/formatPrice';

export default function Pedido(
  { pedido: { id, name, price, sales_products: { quantity } }, indice: { index } },
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
        {quantity}
      </td>
      <td
        data-testid={
          `customer_order_details__element-order-table-unit-price-${index}`
        }
      >
        {formatPrice(price)}
      </td>
      <td
        data-testid={
          `customer_order_details__element-order-table-sub-total-${index}`
        }
      >
        {formatPrice(price * quantity)}
      </td>
    </tr>
  );
}

Pedido.propTypes = PropTypes.shape({}).isRequired;
