const getUser = async () => {
  const userId = '9243ff9a-70f6-408b-b8a1-eb814b318fa7'
  const urlUser = `https://agile-tor-65287.herokuapp.com/users/${userId}/profile`
  const response = await fetch(urlUser)

  const userData = await response.json()

  return userData
}

export default getUser
