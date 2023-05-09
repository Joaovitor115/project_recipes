import React, { useState } from 'react';
import products from '../tests/mocks/products.mocks';
import NavBar from '../components/NavBar';

function CustomerProducts() {
  const [quantities, setQuantities] = useState(0);

  const decrement = () => {
    setQuantities(quantities - 1);
  };

  const increment = () => {
    setQuantities(quantities + 1);
  };

  return (
    <div>
      <NavBar />
      <div>
        {
          products.map(({ id, name, price, urlImage }) => (
            <div key={ id }>
              <img
                src={ urlImage }
                alt={ name }
                data-testid={ `customer_products__img-card-bg-image-${id}` }
              />
              <p data-testid={ `customer_products__element-card-title-${id}` }>{name}</p>
              <p data-testid={ `customer_products__element-card-price-${id}` }>{price}</p>
              <button
                type="button"
                data-testid={ `customer_products__button-card-rm-item-${id}` }
                onClick={ decrement }
              >
                -
              </button>
              <input
                type="text"
                data-testid={ `customer_products__input-card-quantity-${id}` }
                value={ quantities }
              />
              <button
                type="button"
                data-testid={ `customer_products__button-card-add-item-${id}` }
                onClick={ increment }
              >
                +
              </button>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default CustomerProducts;
