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
  const [showOptionsModal, setShowOptionsModal] = useState(false)
  const [saleValue, setSaleValue] = useState(0)

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
    showOptionsModal,
    setShowOptionsModal,
    saleValue,
    setSaleValue
  }

  if (categories && _.isEmpty(categories)) {
    updateCategories()
  }

  console.log(selectedPlate)

  return (
    <RestaurantContext.Provider value={state}>
      <Navbar />
      <div className="all-plates-container">
        <PlatesContainer />
        <Cart />
      </div>
      {showOptionsModal && <OptionsModal />}
    </RestaurantContext.Provider>
  )
}

export default App
