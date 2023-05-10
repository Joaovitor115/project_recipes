import React, { useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
import CartItem from '../components/CartItem';
import formatPrice from '../utils/formatPrice';
import calculateTotal from '../utils/calculateTotal';
import AddresForm from '../components/AddresForm';

export default function CustomerCheckout() {
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [address, setAddress] = useState('');
  const [number, setNumber] = useState('');
  useEffect(() => {
    const cartLocalstorage = JSON.parse(localStorage.getItem('cart')) || [];
    const cart = cartLocalstorage
      .filter((item) => item.quantity);
    setItems(cart);
    setTotal(calculateTotal(cart));
  }, []);
  const removeItem = (id) => {
    const newCart = items.filter((item) => item.id !== id);
    setItems(newCart);
    setTotal(calculateTotal(newCart));
  };
  return (
    <>
      <NavBar />
      <div className="checkout-container">
        <h3>Finalizar Pedido</h3>
        <table>
          <tr>
            <th>Item</th>
            <th>Descrição</th>
            <th>Quantidade</th>
            <th>Valor Unitário</th>
            <th>Sub-total</th>
            <th>Remover Item</th>
          </tr>
          {items.map((item, index) => (
            <CartItem
              key={ item.id }
              item={ item }
              index={ index }
              removeItem={ removeItem }
            />))}
        </table>
        <button type="button">
          Total: R$
          {' '}
          <span
            data-testid="customer_checkout__element-order-total-price"
          >
            {formatPrice(total)}
          </span>
        </button>
        <AddresForm
          address={ address }
          number={ number }
          setAddress={ setAddress }
          setNumber={ setNumber }
        />
      </div>
    </>
  );
}
