export default function formatPrice(price) {
  return price.toLocaleString(
    'pt-BR',
    { style: 'currency', currency: 'BRL', currencyDisplay: 'code' },
  ).replace('BRL', '').replace('.', ',');
}
