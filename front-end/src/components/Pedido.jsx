import React from 'react';
import PropTypes from 'prop-types';

export default function Pedido(
  { pedido: { id, descricao, quantidade, valorUnitario }, indice: { index } },
) {
  return (
    <div>
      <table>
        <tr>
          <th>Item</th>
          <th>Descrição</th>
          <th>Quantidade</th>
          <th>Valor Unitário</th>
          <th>Sub-total</th>
        </tr>
        <tr>
          <div>
            <td
              data-testid={
                `customer_order_details__element-order-table-item-number-${index}`
              }
            >
              {id}
            </td>
            <td
              data-testid={
                `customer_order_details__element-order-table-name-${index}`
              }
            >
              {descricao}
            </td>
            <td
              data-testid={
                `customer_order_details__element-order-table-quantity-${index}`
              }
            >
              {quantidade}
            </td>
            <td
              data-testid={
                `customer_order_details__element-order-table-unit-price-${index}`
              }
            >
              {valorUnitario}
            </td>
            <td
              data-testid={
                `customer_order_details__element-order-table-sub-total-${index}`
              }
            >
              {valorUnitario * quantidade}
            </td>
          </div>
        </tr>
      </table>
    </div>

  );
}

Pedido.propTypes = {
  pedido: PropTypes.shape({
    id: PropTypes.number,
    descricao: PropTypes.string,
    quantidade: PropTypes.number,
    valorUnitario: PropTypes.number,
  }).isRequired,
  indice: PropTypes.shape({
    index: PropTypes.number,
  }).isRequired,
};
