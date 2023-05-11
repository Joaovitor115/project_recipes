import React from 'react';
import { useHistory } from 'react-router-dom';

function NavBar() {
  const history = useHistory();
  const user = JSON.parse(localStorage.getItem('user'));

  const clear = () => {
    history.push('/login');
    localStorage.clear();
  };

  return (
    <div>
      <nav>
        <ul>
          <li data-testid="customer_products__element-navbar-link-products">
            <a href="/customer/products">PRODUTOS</a>
          </li>
          <li>
            <a
              href="/customer/orders"
              data-testid="customer_products__element-navbar-link-orders"
            >
              MEUS PEDIDOS

            </a>
          </li>
          <li data-testid="customer_products__element-navbar-user-full-name">
            {user.name}
          </li>
        </ul>
        <button
          type="button"
          data-testid="customer_products__element-navbar-link-logout"
          onClick={ clear }
        >
          SAIR
        </button>
      </nav>
    </div>
  );
}

export default NavBar;
