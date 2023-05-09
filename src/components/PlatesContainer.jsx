import { useContext } from "react"
import PlateCard from "./PlateCard"
import _ from "lodash"
import { RestaurantContext } from "./context/RestaurantContext"

const PlatesContainer = () => {
    const { categories, selectedCategory } = useContext(RestaurantContext)

    const currentCategory = _.filter(categories, (category) => category.name === selectedCategory)

    if (!_.isEmpty(currentCategory)) {
        return (
            <div className="plates-container">
                {currentCategory[0]["menu-items"].map((product) => (
                    <PlateCard key={product.id} product={product}/>
                ))}
            </div>
        )
    }
}

export default PlatesContainer