export const putFetch = async (data) => {
  const userId = '9243ff9a-70f6-408b-b8a1-eb814b318fa7'
  const urlUser = `https://agile-tor-65287.herokuapp.com/users/${userId}/profile`

  await fetch(urlUser, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
}
