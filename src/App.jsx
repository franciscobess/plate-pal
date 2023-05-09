import Navbar from "./components/Navbar"
import { RestaurantContext } from "./components/context/RestaurantContext"
import { useState } from "react"
import restaurantData from "../restaurant-data.json"
import _ from "lodash"
import PlatesContainer from "./components/PlatesContainer"
import PromotionsContainer from "./components/PromotionsContainer"

function App() {
  const [categories, setCategories] = useState([])
  const [selectedCategory, setSelectedCategory] = useState(null)

  const updateCategories = () => {
    setCategories(restaurantData.categories)
  }

  const state = {
    categories,
    selectedCategory,
    setSelectedCategory,
  }

  if (categories && _.isEmpty(categories)) {
    updateCategories()
  }

  return (
    <RestaurantContext.Provider value={state}>
      <Navbar />
      <div className="all-plates-container">
        <PlatesContainer />
        <PromotionsContainer />
      </div>
    </RestaurantContext.Provider>
  )
}

export default App
