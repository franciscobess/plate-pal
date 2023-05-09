import { useContext } from 'react'
import Logo from '../assets/logo.jpg'
import { RestaurantContext } from './context/RestaurantContext'

const Navbar = () => {
    const { categories, selectedCategory, setSelectedCategory } = useContext(RestaurantContext)

    const selectCategory = (event) => {
        const categoryName = event.target.innerText
        if (selectedCategory === null || categoryName !== selectedCategory) {
            setSelectedCategory(categoryName)
        }
    }

    return (
        <div className='navbar'>
            <div className='navbar-logo-title-container'>
                <img src={Logo} alt="restaurant-logo" className='navbar-restaurant-logo' />
                <h1 className='navbar-title'>Palate Pleasers: Indulge in Culinary Delights at PlatePal</h1>
            </div>

            <div className='navbar-categories-container'>
                {categories.map((category) => (
                    <div key={category.id} className='navbar-category-content'>
                        <h2 className="navbar-category" onClick={selectCategory}>{category.name}</h2>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Navbar