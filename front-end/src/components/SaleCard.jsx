import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import formatPrice from '../utils/formatPrice';

export default function SaleCard({ id, status, saleDate, totalPrice }) {
  return (
    <Link to={ `/customer/orders/${id}` }>
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
    </Link>

  );
}
SaleCard.propTypes = PropTypes.shape({}).isRequired;
