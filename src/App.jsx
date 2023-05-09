import Navbar from "./components/Navbar"
import { RestaurantContext } from "./components/context/RestaurantContext"
import { useState } from "react"
import restaurantData from "../restaurant-data.json"
import _ from "lodash"

function App() {
  const [categories, setCategories] = useState([])

  const updateCategories = () => {
    setCategories(restaurantData.categories)
  }

  const state = {
    categories,
  }

  if (categories && _.isEmpty(categories)) {
    updateCategories()
  }

  return (
    <RestaurantContext.Provider value={state}>
      <Navbar />
    </RestaurantContext.Provider>
  )
}

export default App
