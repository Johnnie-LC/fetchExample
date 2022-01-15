// import MyComponent from './components/MyComponent'
import MethodFetch from './components/MethodFetch'
import StoreProvider from './store/StoreProvider'

function App() {
  return (
    <StoreProvider>
      {/* <MyComponent /> */}
      <MethodFetch />
    </StoreProvider>
  )
}

export default App
