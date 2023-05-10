import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
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
  const [sellers, setSellers] = useState([]);
  const [seleId, setSaleId] = useState(1);
  const history = useHistory();

  useEffect(() => {
    const response = async () => {
      const result = await fetch('http://localhost:3001/user/sellers');
      const data = await result.json();
      setSellers(data);
    };
    response();
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
  const handleCheckout = () => {
    history.push('/customer/orders/');
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
              saleId={ seleId }
              setSaleId={ setSaleId }
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
          sellers={ sellers }
          handleCheckout={ handleCheckout }
        />
      </div>
    </>
  );
}
