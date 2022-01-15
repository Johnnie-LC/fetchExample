const getFetch = async () => {
  const url = 'data.json'
  const response = await fetch(url)
  const data = await response.json()
  return data
}

export default getFetch