import { useContext } from 'react'
import Logo from '../assets/logo.jpg'
import { RestaurantContext } from './context/RestaurantContext'

const Navbar = () => {
    const { categories } = useContext(RestaurantContext)

    return (
        <div className='navbar'>
            <div className='navbar-logo-title-container'>
                <img src={Logo} alt="restaurant-logo" className='navbar-restaurant-logo' />
                <h1 className='navbar-title'>Palate Pleasers: Indulge in Culinary Delights at PlatePal</h1>
            </div>

            <div className='navbar-categories-container'>
                {categories.map((categorie) => (
                    <div key={categorie.id} className='navbar-categorie-content'>
                        <h2 className="navbar-categorie">{categorie.name}</h2>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Navbar