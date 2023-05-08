import Logo from '../assets/logo.jpg'

const Navbar = () => {
    return (
        <div className='navbar'>
            <img src={Logo} alt="restaurant-logo" className='navbar-restaurant-logo'/>
        </div>
    )
}

export default Navbar