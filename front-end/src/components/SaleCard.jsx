import React from 'react';
import PropTypes from 'prop-types';
import formatPrice from '../utils/formatPrice';

export default function SaleCard({ id, status, saleDate, totalPrice }) {
  return (

    <div className="sale-card">
      <p data-testid={ `customer_orders__element-order-id-${id}` }>
        { id }
      </p>
      <p data-testid={ `customer_orders__element-delivery-status-${id}` }>
        { status }
      </p>
      <p data-testid={ `customer_orders__element-order-date-${id}` }>
        { new Date(Date.parse(saleDate))
          .toLocaleDateString('pt-BR', { timezone: 'UTC' }) }
      </p>
      <p data-testid={ `customer_orders__element-card-price-${id}` }>
        { formatPrice(totalPrice) }
      </p>
    </div>

  );
}
SaleCard.propTypes = PropTypes.shape({}).isRequired;
