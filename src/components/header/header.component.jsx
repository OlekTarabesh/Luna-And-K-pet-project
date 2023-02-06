import Navbar from "../navbar/navbar.component";
import { StarIcon } from "../../icons/star-1-icon.jsx";
import './header.styles.css';
const Header = () => {
    
    return (
        <div className="header-wrapper">
            <Navbar />
            <span className="star-svg">
                <StarIcon />
            </span>
        </div>
    )
}

export default Header;