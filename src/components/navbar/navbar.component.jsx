import './navbar.styles.css';
import { MainLogo } from '../../icons/main-logo-Luna&K.jsx';
import { SearchIcon } from '../../icons/search-icon.jsx';
import { ShoppingCartIcon } from '../../icons/shopping-cart-icon.jsx';
import { HeartIcon } from '../../icons/heart-icon';
const Navbar = () => {

    return (
            <div className="navbar-wrapper">
                <a href className='navbar-logo'>
                    <MainLogo className="navbar-logo" />
                </a>
                <ul className='navbar-ul'>
                    <li className='navbar-li'><a href>Catalog</a></li>
                    <li className='navbar-li'><a href>About</a></li>
                    <li className='navbar-li'><a href>delivery</a></li>
                    <li className='navbar-li'><a href>contacts</a></li>
                </ul>
                <div className="navbar-icons-container">
                    <a href className="navbar-search">
                        <SearchIcon className="navbar-search" />
                    </a>
                    <a href className="navbar-shop">
                        <ShoppingCartIcon className="navbar-shop" />
                    </a>
                    <a href className="navbar-heart" >
                        <HeartIcon className="navbar-heart" />
                    </a>
                </div>
            </div>
    )
}

export default Navbar; 