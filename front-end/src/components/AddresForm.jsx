import React from 'react';
import PropTypes from 'prop-types';

export default function AddresForm({
  sellers, setDeliveryAddress, setDeliveryNumber, setSellerId,
  deliveryAddress, deliveryNumber, handleCheckout }) {
  return (
    <div className="address-form-container">
      <h3>Detalhes e Endereço para Entrega</h3>
      <div className="addres-form">
        <label htmlFor="seller">
          P. Vendedora Responsável:
          <select
            aria-label="seller"
            data-testid="customer_checkout__select-seller"
            name="seller"
            onChange={ ({ target }) => setSellerId(target.value) }
            id="seller"
          >
            {
              sellers
                .map(({ name, id }) => <option key={ name } value={ id }>{name}</option>)
            }
          </select>
        </label>
        <label htmlFor="input-address">
          Endereço
          <input
            data-testid="customer_checkout__input-address"
            type="text"
            id="input-address"
            name="address"
            value={ deliveryAddress }
            onChange={ ({ target }) => setDeliveryAddress(target.value) }
          />
        </label>
        <label htmlFor="address-number">
          Número
          <input
            data-testid="customer_checkout__input-address-number"
            type="text"
            id="address-number"
            name="number"
            value={ deliveryNumber }
            onChange={ ({ target }) => setDeliveryNumber(target.value) }
          />
        </label>
      </div>
      <button
        data-testid="customer_checkout__button-submit-order"
        type="button"
        onClick={ handleCheckout }
      >
        Finalizar Pedido

      </button>
    </div>
  );
}

AddresForm.propTypes = PropTypes.shape({}).isRequired;
