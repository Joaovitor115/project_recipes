import React from 'react';
import products from '../tests/mocks/products.mocks';
import NavBar from '../components/NavBar';

function CustomerProducts() {
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
              >
                -
              </button>
              <input
                type="text"
                data-testid={ `customer_products__input-card-quantity-${id}` }
                // {quantities}
              />
              <button
                type="button"
                data-testid={ `customer_products__button-card-add-item-${id}` }
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
