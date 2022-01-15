const postFetch = () => {
  const newData = {
    user_id: 'c5e15933-d2c4-4f0a-80cc-aa650414ea5b1234',
    user_first_name: 'AnPericles',
    user_last_name: 'Obrien',
    user_email: 'john77@example.org',
    user_password: 'vG&49KmK#6',
    active: false,
    user_phone: '001-735-617-1334x0410',
    user_name: 'whitescott',
    user_birth_day: '2017-10-01',
    user_img_profile: '/behavior/world.json',
    user_english_level: 'B1',
    user_knowledge_level: 'without knowledge',
    user_location: 'Lebanon',
    user_creation_date: '2017-10-01T00:00:00+00:00',
    user_education: 'university',
    user_address: 'USNV Gillespie\nFPO AP 81914',
    user_profession: 'Medical laboratory scientific officer',
    user_rol: 'normal',
    user_last_update: '2017-10-01T00:00:00+00:00',
    user_subdomain: 'https://oconnor.com/',
    user_gender: 'No binary',
    user_looking_job: false,
    user_description:
      'Into about practice consumer wonder. Day traditional voice. Player number meeting man our professor window.',
  }
  const request = new Request(
    'https://agile-tor-65287.herokuapp.com/users/create',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify(newData),
    }
  )
  fetch(request)
    .then((response) => {
      if (response.status === 200) {
        return response.json()
      } else {
        throw new Error('¡Algo salió mal en el servidor API! ')
      }
    })
    .then((response) => console.log(response))
    .catch((error) => console.log(error))
}

export default postFetch
