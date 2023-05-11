export default function calculateTotal(items) {
  const totalPrice = items.reduce((acc, curr) => {
    if (curr.quantity) {
      return acc + curr.quantity * Number(curr.price);
    }
    return acc;
  }, 0);
  return totalPrice;
}
