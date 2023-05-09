// import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
// import products from '../tests/mocks/products.mocks';
import { useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
import ProductCard from '../components/ProductCard';

function CustomerProducts() {
  const [total, setTotal] = useState(0);
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  const history = useHistory();

  useEffect(() => {
    const response = async () => {
      const result = await fetch('http://localhost:3001/product');
      const data = await result.json();
      setProducts(data);
    };
    response();
  }, []);

  const addCart = async (id, quantity) => {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || products;
    const updatedItems = cartItems.map((product) => {
      if (product.id === id) {
        return { ...product, quantity };
      }
      return product;
    });
    const totalPrice = updatedItems.reduce((acc, curr) => {
      if (curr.quantity) {
        return acc + curr.quantity * Number(curr.price);
      }
      return acc;
    }, 0);
    setTotal(totalPrice);
    setCart(updatedItems);
    localStorage.setItem('cart', JSON.stringify(updatedItems));
  };

  const carrinho = () => {
    history.push('/customer/checkout');
  };

  return (
    <div>
      <NavBar />
      <div>
        {
          products.map((product) => (
            <ProductCard key={ product.id } addCart={ addCart } product={ product } />
          ))
        }
      </div>
      <button
        type="submit"
        data-testid="customer_products__button-cart"
        onClick={ carrinho }
      >
        Ver Carrinho: R$
        {' '}
        <span
          data-testid="customer_products__checkout-bottom-value"
        >
          {JSON.stringify(total).replace('.', ',')}
        </span>
      </button>
    </div>
  );
}

export default CustomerProducts;
