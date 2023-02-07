import { Link } from "react-router-dom";
import Navbar from "../navbar/navbar.component";
import { StarIcon } from "../../icons/star-1-icon.jsx";
import { Ellipse1 } from "../../icons/ellipses/Ellipse1";
import { ellipses } from '../../icons/ellipses/ellipse.data.js';
import headerStyle from './header.module.css';

const Header = () => {
    const { ellipse } = ellipses;
    return (
        <>
            <div className={headerStyle.headerWrapper}>
                <Navbar />
                <span className={headerStyle.starSvg}>
                    <StarIcon />
                </span>
            </div>
            
            <div className={headerStyle.headerTitleWrapper}>
                <h2 className={headerStyle.headerTitle}>Elegant tableware collection for your cosiness</h2>
            
                <div className={headerStyle.headerImage1} />
                <div className={headerStyle.headerImage2} />
                <div className={headerStyle.headerImage3} />
                <span className={headerStyle.headerEllipseContainer}>
                    {ellipse.map((i) => {
                        return (
                            <span className={headerStyle.headerEllipse}>{i.icon}</span>
                        )     
                })}
                <span className={headerStyle.ellipseText}>Go to the catalog</span>
                </span>
            </div>
        </>
    )
}

export default Header;