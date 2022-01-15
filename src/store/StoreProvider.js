import { createContext, useReducer, useContext } from 'react'
import storeReducer, { initialStore } from './storeReducer'

// un hook es una funcion de que retorna un valor y utiliza logica de estado

const StoreContext = createContext()

const StoreProvider = ({ children }) => (
  <StoreContext.Provider value={useReducer(storeReducer, initialStore)}>
    {children}
  </StoreContext.Provider>
)

const useStore = () => useContext(StoreContext)[0]
const useDispatch = () => useContext(StoreContext)[1]

export { StoreContext, useStore, useDispatch }
export default StoreProvider
