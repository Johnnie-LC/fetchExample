// import { useState } from 'react'
import { useStore, useDispatch } from '../store/StoreProvider'
import { useEffect } from 'react'
import TYPES from '../types'
import getUser from '../store/data/getUser'

const MyComponent = () => {
  const { user_id, user_first_name } = useStore()
  // const [userX, setUserX] = useState({})

  const dispatch = useDispatch()

  const updateUser = () => {
    getUser().then((newUser) =>
      dispatch({ type: TYPES.GET_USER, payload: newUser })
    )
  }

  useEffect(() => {
    updateUser()
  }, [])

  return (
    <div>
      <h2>{user_id}</h2>
      <h2>{user_first_name}</h2>

      {/* <h1>My Component</h1>
      <h2>User: {user ? user.name : 'Bienvenid@'}</h2>
      <button onClick={() => dispatch({ type: TYPES.AUTH_LOGOUT })}>
        logout
      </button>
      <button
        onClick={() =>
          dispatch({
            type: TYPES.AUTH_LOGIN,
            payload: { id: 1, name: 'Johnnie' },
          })
        }
      >
        login
      </button>

      <h2>Products</h2>
      <ul>
        {products?.map((product) => (
          <li key={product.id}>{product.title}</li>
        ))}
      </ul>

      {user && (
        <>
          <button onClick={() => dispatch({ type: TYPES.PRODUCT_DELETE_ALL })}>
            Delete all
          </button>
          <button
            onClick={() =>
              dispatch({
                type: TYPES.PRODUCT_CHANGE,
                payload: { id: 3, title: 'Product #3' },
              })
            }
          >
            Change
          </button>
        </>
      )} */}
    </div>
  )
}

export default MyComponent
