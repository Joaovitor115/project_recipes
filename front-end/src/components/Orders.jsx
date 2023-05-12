import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import formatPrice from '../utils/formatPrice';
import formatDate from '../utils/formatDate';

export default function SaleCard({ id, status, saleDate, totalPrice,
  deliveryAddress, deliveryNumber }) {
  return (
    <Link to={ `/seller/orders/${id}` }>
      <div className="sale-card">
        <p data-testid={ `seller_orders__element-order-id-${id}` }>
          { id }
        </p>
        <p data-testid={ `seller_orders__element-delivery-status-${id}` }>
          { status }
        </p>
        <p data-testid={ `seller_orders__element-order-date-${id}` }>
          { formatDate(saleDate) }
        </p>
        <p data-testid={ `seller_orders__element-card-price-${id}` }>
          { formatPrice(totalPrice) }
        </p>
        <p data-testid={ `seller_orders__element-card-address-${id}` }>
          { deliveryAddress}
          ,
          {' '}
          { deliveryNumber }
        </p>
      </div>
    </Link>

  );
}
SaleCard.propTypes = PropTypes.shape({}).isRequired;
