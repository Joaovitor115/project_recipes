import React from 'react';
import PropTypes from 'prop-types';
import formatPrice from '../utils/formatPrice';

export default function CartItem(
  { item: { id, name, price, quantity }, index, removeItem },
) {
  return (
    <tr>
      <td
        data-testid={ `customer_checkout__element-order-table-item-number-${index}` }
      >
        {index + 1}
      </td>
      <td
        data-testid={ `customer_checkout__element-order-table-name-${index}` }
      >
        {name}

      </td>
      <td
        data-testid={ `customer_checkout__element-order-table-quantity-${index}` }
      >
        {quantity}
      </td>
      <td
        data-testid={ `customer_checkout__element-order-table-unit-price-${index}` }
      >
        {formatPrice(price)}
      </td>
      <td
        data-testid={ `customer_checkout__element-order-table-sub-total-${index}` }
      >
        {formatPrice(quantity * price)}
      </td>
      <td>
        <button
          data-testid={ `customer_checkout__element-order-table-remove-${index}` }
          type="button"
          onClick={ () => removeItem(id) }
        >
          remover
        </button>
      </td>
    </tr>
  );
}

CartItem.propTypes = PropTypes.shape({}).isRequired;
