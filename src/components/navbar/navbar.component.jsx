import './navbar.styles.css';

const Navbar = () => {

    return (
            <div className="navbar-wrapper">
                <div className="navbar-logo"></div>
                <ul className='navbar-ul'>
                    <li className='navbar-li'>Catalog</li>
                    <li className='navbar-li'>About</li>
                    <li className='navbar-li'>delivery</li>
                    <li className='navbar-li'>contacts</li>
                </ul>
                <div className="navbar-icons-container">
                    <div className="navbar-search"></div>
                    <div className="navbar-shop"></div>
                    <div className="navbar-heart"></div>
                </div>
            </div>
    )
}

export default Navbar; 