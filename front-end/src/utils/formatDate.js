export default function formatDate(date) {
  return new Date(Date.parse(date))
    .toLocaleDateString('pt-BR', { timezone: 'UTC' });
}
