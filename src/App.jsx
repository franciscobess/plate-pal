import Navbar from "./components/Navbar"
import { RestaurantContext } from "./components/context/RestaurantContext"

function App() {

  const state = {

  }

  return (
    <RestaurantContext.Provider value={state}>
      <Navbar />
    </RestaurantContext.Provider>
  )
}

export default App
