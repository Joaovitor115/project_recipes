import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import NavBar from '../components/NavBar';
import CartItem from '../components/CartItem';
import formatPrice from '../utils/formatPrice';
import calculateTotal from '../utils/calculateTotal';
import AddresForm from '../components/AddresForm';

export default function CustomerCheckout() {
  const [items, setItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [deliveryNumber, setDeliveryNumber] = useState('');
  const [sellerId, setSellerId] = useState(0);
  const [sellers, setSellers] = useState([]);
  const [user, setUser] = useState({});
  const history = useHistory();

  useEffect(() => {
    const response = async () => {
      const result = await fetch('http://localhost:3001/user/sellers');
      const data = await result.json();
      setSellers(data);
    };
    response();
    const storageUser = JSON.parse(localStorage.getItem('user'));
    setUser(storageUser);
    const cartLocalstorage = JSON.parse(localStorage.getItem('cart')) || [];
    const cart = cartLocalstorage
      .filter((item) => item.quantity);
    setItems(cart);
    setTotalPrice(calculateTotal(cart));
  }, []);
  const removeItem = (id) => {
    const newCart = items.filter((item) => item.id !== id);
    setItems(newCart);
    setTotalPrice(calculateTotal(newCart));
  };
  const handleCheckout = async () => {
    const sale = {
      sellerId,
      totalPrice,
      deliveryAddress,
      deliveryNumber,
      productsIds: items.map((item) => item.id),
      quantities: items.map((item) => item.quantity),
    };
    const response = await fetch('http://localhost:3001/sale', {
      method: 'POST',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json',
        Authorization: user.token,
      },
      referrerPolicy: 'no-referrer',
      body: JSON.stringify(sale),
    });
    localStorage.removeItem('cart');
    const { id } = await response.json();
    history.push(`/customer/orders/${id}`);
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
            {formatPrice(totalPrice)}
          </span>
        </button>
        <AddresForm
          deliveryAddress={ deliveryAddress }
          deliveryNumber={ deliveryNumber }
          sellerId={ sellerId }
          setDeliveryAddress={ setDeliveryAddress }
          setDeliveryNumber={ setDeliveryNumber }
          setSellerId={ setSellerId }
          sellers={ sellers }
          handleCheckout={ handleCheckout }
        />
      </div>
    </>
  );
}
