import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function ProductCard(
  { product: { id, name, price, urlImage }, updateCart },
) {
  const [quantity, setQuanty] = useState(0);
  const add = () => {
    setQuanty((prev) => prev + 1);
    updateCart(id, quantity + 1);
  };

  const remove = () => {
    setQuanty((prev) => (prev === 0 ? prev : prev - 1));
    const newQuantity = quantity === 0 ? 0 : quantity - 1;
    updateCart(id, newQuantity);
  };

  const manualQuantity = ({ target }) => {
    setQuanty(target.value);
    updateCart(id, target.value);
  };

  return (
    <div key={ id }>
      <img
        src={ urlImage }
        alt={ name }
        data-testid={ `customer_products__img-card-bg-image-${id}` }
        width="50"
      />
      <p data-testid={ `customer_products__element-card-title-${id}` }>
        {name}
      </p>
      <p data-testid={ `customer_products__element-card-price-${id}` }>
        {/* {(price.replace(/\./, ',').toFixed(2))} */}
        {(quantity ? Number(price) * Number(quantity) : Number(price)).toFixed(2)
          .replace('.', ',')}
      </p>
      <button
        type="button"
        data-testid={ `customer_products__button-card-rm-item-${id}` }
        name={ name }
        onClick={ remove }
      >
        -
      </button>
      <input
        type="text"
        data-testid={ `customer_products__input-card-quantity-${id}` }
        value={ quantity }
        onChange={ manualQuantity }
      />
      <button
        type="button"
        data-testid={ `customer_products__button-card-add-item-${id}` }
        name={ name }
        onClick={ add }
      >
        +
      </button>
    </div>
  );
}
ProductCard.propTypes = PropTypes.shape({}).isRequired;
