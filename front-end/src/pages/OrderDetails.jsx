import React from 'react';
import NavBar from '../components/NavBar';
import Pedido from '../components/Pedido';

function OrderDetails() {
  const [status, setStatus] = useState('');
  const pedido = {
    pedido: '0001',
    pessoaVendedora: 'Fulano',
    deliveryStatus: 'PENDENTE',
    data: '08/04/21',
    itensPedidos: [
      {
        id: 1,
        descricao: 'Cerveja Stella 250ml',
        quantidade: 3,
        valorUnitario: '3,50',
      },
      {
        id: 2,
        descricao: 'Cerveja Skol Latão 450ml',
        quantidade: 4,
        valorUnitario: '4,10',
      },
      {
        id: 3,
        descricao: 'Salgadinho Torcida Churrasco',
        quantidade: 1,
        valorUnitario: '1,56',
      },
    ],
    price: '23.80',
  };

  const alteraStatus = () => {
    if (status !== 'ENTREGUE') setStatus('ENTREGUE');
  };

  return (
    <div>
      <NavBar />
      <p>Detalhe do Pedido</p>
      <section>
        <h1
          data-testid="customer_order_details__element-order-details-label-order-id"
        >
          {pedido.pedido}
        </h1>
        <h1
          data-testid="customer_order_details__element-order-details-label-seller-name"
        >
          {pedido.pessoaVendedora}
        </h1>
        <h1
          data-testid="customer_order_details__element-order-details-label-order-date"
        >
          {pedido.data}
        </h1>
        <h1
          data-testid={
            `customer_order_details__element
            -order-details-label-delivery-status${pedido.pedido}`
          }
        >
          {pedido.deliveryStatus || status}
        </h1>
        <button
          type="button"
          onClick={ alteraStatus }
          data-testid="customer_order_details__button-delivery-check"
        >
          MARCAR COMO ENTREGUE
        </button>
      </section>
      {
        pedido.itensPedidos.map((item, index) => (
          <Pedido
            key={ index }
            pedido={ item }
            indice={ index }
          />
        ))
      }
      <div>
        {`Total: R$ ${pedido.price}`}
      </div>
    </div>
  );
}

export default OrderDetails;
