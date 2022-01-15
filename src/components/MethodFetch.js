import { useState, useEffect } from 'react'
// import getFetch from '../store/data/getFetch'
import getUser from '../store/data/getUser'
import { putFetch } from '../store/data/putFetch'

const initialFetchData = {
  user_id: '',
  user_first_name: '',
  user_last_name: '',
  user_email: '',
  user_password: '',
  active: false,
  user_phone: '',
  user_name: '',
  user_birth_day: '',
  user_img_profile: '',
  user_english_level: '',
  user_knowledge_level: '',
  user_location: '',
  user_creation_date: '',
  user_education: '',
  user_address: '',
  user_profession: '',
  user_rol: '',
  user_last_update: '',
  user_subdomain: '',
  user_gender: '',
  user_looking_job: false,
  user_description: '',
}

const MethodFetch = () => {
  const [fetchData, setFetchData] = useState(initialFetchData)

  const updateFetch = () => {
    // getFetch().then((newFetch) => {
    //   console.log(newFetch)
    //   setFetchData(newFetch)
    // })
    getUser().then((newUser) => setFetchData(newUser))
  }

  useEffect(() => {
    updateFetch()
  }, [])

  return (
    <div>
      {console.log(fetchData)}
      <h1>Fetch Method</h1>
      <h2>
        {fetchData['user_first_name']} email {fetchData['user_email']}
      </h2>
      <button
        onClick={() =>
          setFetchData({ ...fetchData, user_first_name: 'Natalia' })
        }
      >
        Modificar info Usuario
      </button>
      <button
        onClick={() =>
          putFetch(fetchData)
            .then((response) => console.log(response.json()))
            .catch((error) => console.log(error))
        }
      >
        Actualizar Info usuario
      </button>
    </div>
  )
}

export default MethodFetch
