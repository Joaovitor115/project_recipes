import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import products from '../tests/mocks/products.mocks';
import NavBar from '../components/NavBar';

function CustomerProducts() {
  const [quantities, setQuantities] = useState(0);
  const [valorTotal,
    // setValorTotal
  ] = useState(0);
  const history = useHistory();

  const carrinho = () => {
    history.push('/customer/checkout');
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
                width="50"
              />
              <p data-testid={ `customer_products__element-card-title-${id}` }>{name}</p>
              <p data-testid={ `customer_products__element-card-price-${id}` }>{price}</p>
              <button
                type="button"
                data-testid={ `customer_products__button-card-rm-item-${id}` }
                name={ name }
                onClick={ () => setQuantities(quantities < 1 ? 0 : quantities - 1) }
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
                name={ name }
                onClick={ () => setQuantities(quantities + 1) }
              >
                +
              </button>
            </div>
          ))
        }
      </div>
      <button
        type="submit"
        data-testid="customer_products__button-cart"
        onClick={ carrinho }
      >
        <div
          data-testid="customer_products__checkout-bottom-value"
        >
          {`Ver Carrinho: R$ ${valorTotal}`}
        </div>
      </button>
    </div>
  );
}

export default CustomerProducts;
