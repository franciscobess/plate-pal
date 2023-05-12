import Navbar from "./components/Navbar"
import { RestaurantContext } from "./components/context/RestaurantContext"
import { useState } from "react"
import restaurantData from "../restaurant-data.json"
import _ from "lodash"
import PlatesContainer from "./components/PlatesContainer"
import Cart from "./components/Cart"
import OptionsModal from "./components/OptionsModal"

function App() {
  const [categories, setCategories] = useState([])
  const [selectedCategory, setSelectedCategory] = useState("Appeteasers")
  const [selectedPlate, setSelectedPlate] = useState(null)
  const [myCart, setMyCart] = useState([])

  const updateCategories = () => {
    setCategories(restaurantData.categories)
  }

  const state = {
    categories,
    selectedCategory,
    setSelectedCategory,
    selectedPlate,
    setSelectedPlate,
    myCart,
    setMyCart,
  }

  if (categories && _.isEmpty(categories)) {
    updateCategories()
  }

  return (
    <RestaurantContext.Provider value={state}>
      <Navbar />
      <div className="all-plates-container">
        <PlatesContainer />
        <Cart />
      </div>
      <OptionsModal />
    </RestaurantContext.Provider>
  )
}

export default App
