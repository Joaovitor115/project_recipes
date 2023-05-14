export default async function deleteAdm(url, token) {
  const response = await fetch(url, {
    method: 'DELETE',
    cache: 'no-cache',
    headers: {
      'Content-Type': 'application/json',
      Authorization: token,
    },
    referrerPolicy: 'no-referrer',
  });
  return response.json();
}
