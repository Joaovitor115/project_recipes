import React from 'react';

function NavBar() {
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
    </div>
  );
}

export default NavBar;
