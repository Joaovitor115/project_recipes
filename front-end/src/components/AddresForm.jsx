import React from 'react';
import PropTypes from 'prop-types';

export default function AddresForm({ sellers, address, number }) {
  return (
    <div className="address-form-container">
      <h3>Detalhes e Endereço para Entrega</h3>
      <div className="addres-form">
        <label htmlFor="seller">
          P. Vendedora Responsável:
          <select
            aria-label="seller"
            data-testid="customer_checkout__element-order-total-price"
            name="seller"
            id="seller"
          >
            {
              sellers
                .map(({ name }) => <option key={ name } value={ name }>{name}</option>)
            }
          </select>
        </label>
        <label htmlFor="input-address">
          <input
            data-testid="customer_checkout__input-address"
            type="text"
            id="input-address"
            name="address"
            value={ address }
          />
        </label>
        <label htmlFor="address-number">
          <input
            data-testid="customer_checkout__input-address-number"
            type="text"
            id="address-number"
            name="number"
            value={ number }
          />
        </label>
      </div>
    </div>
  );
}

AddresForm.propTypes = PropTypes.shape({}).isRequired;
