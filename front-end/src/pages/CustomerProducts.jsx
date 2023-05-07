import React from 'react';
import products from '../tests/mocks/products.mocks';

function CustomerProducts() {
  return (
    <div>
      <nav>
        <ul>
          <li data-testid="customer_products__element-navbar-link-products">
            <a href="/products">PRODUTOS</a>
          </li>
          <li data-testid="customer_products__element-navbar-link-orders">
            <a href="/orders">MEUS PEDIDOS</a>
          </li>
          <li data-testid="customer_products__element-navbar-user-full-name">
            FULL NAME
          </li>
          <li data-testid="customer_products__element-navbar-link-logout">
            <a href="/login">SAIR</a>
          </li>
        </ul>
      </nav>
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
