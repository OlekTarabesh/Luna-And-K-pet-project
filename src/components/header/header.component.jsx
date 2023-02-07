import Navbar from "../navbar/navbar.component";
import { StarIcon } from "../../icons/star-1-icon.jsx";
import headerStyle from './header.module.css';
const Header = () => {
    
    return (
        <div className={headerStyle.headerWrapper}>
            <Navbar />
            <span className={headerStyle.starSvg}>
                <StarIcon />
            </span>
        </div>
    )
}

export default Header;