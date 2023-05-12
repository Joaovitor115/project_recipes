import React from 'react';
import { useHistory } from 'react-router-dom';
// import AdminManage from '../pages/Admin';
// Refatorar o outro NavBar e seprar o customer_products__element-navbar-link-products

import PropTypes from 'prop-types';

function NavBar2({ linkOrders }) {
  const history = useHistory();
  // const user = JSON.parse(localStorage.getItem('user'));

  const clear = () => {
    history.push('/login');
    localStorage.clear();
  };

  return (
    <div>
      <nav>
        <ul>
          {/* <li data-testid="customer_products__element-navbar-link-products">
            <a href="/products">PRODUTOS</a>
          </li>
          // Refatorar o outro NavBar e seprar o customer_products__element-navbar-link-products
          */}

          <li data-testid="customer_products__element-navbar-link-orders">
            {linkOrders}
          </li>
          <li data-testid="customer_products__element-navbar-user-full-name">
            {/* {user.name} */}
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
NavBar2.propTypes = {
  linkOrders: PropTypes.string.isRequired,
};

export default NavBar2;
