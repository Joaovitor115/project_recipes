export default async function getErrorMessage() {
  const endpoint = 'https://localhost:3001/login';
  const response = await fetch(endpoint);
  const responseJSON = await response.json();
  return responseJSON;
}
