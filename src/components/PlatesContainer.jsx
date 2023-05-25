import { useContext } from "react"
import PlateCard from "./PlateCard"
import _ from "lodash"
import { RestaurantContext } from "./context/RestaurantContext"

const PlatesContainer = () => {
    const { categories, selectedCategory } = useContext(RestaurantContext)

    const currentCategory = _.filter(categories, (category) => category.name === selectedCategory)[0]


    if (!_.isEmpty(currentCategory)) {
        const items = currentCategory.name === "Dessert" ? currentCategory["menu-items"][0]["sub-items"] : currentCategory["menu-items"]

        return (
            <div className="plates-container">
                {items.map((product) => (
                    <PlateCard key={product.id} product={product} />
                ))}
            </div>
        )
    }
}

export default PlatesContainer