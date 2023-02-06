import Navbar from "../navbar/navbar.component";

import './header.styles.css';
const Header = () => {
    
    return (
        <div className="header-wrapper">
            <Navbar />
            <svg className="star-svg" />
        </div>
    )
}

export default Header;