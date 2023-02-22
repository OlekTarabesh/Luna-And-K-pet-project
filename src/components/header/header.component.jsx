// import { Link } from "react-router-dom";
import { StarIcon } from "../../icons/star-1-icon.jsx";
import { ellipses } from '../../icons/ellipses/ellipse.data.js';
import styled from './header.module.css';

const Header = () => {
    const { ellipse } = ellipses;
    return (
        <>
            <div className={styled.headerWrapper}>
                <div className={styled.headerContainer}>
                    <span className={styled.starSvg}>
                        <StarIcon />
                    </span>
                </div>
                
                <div className={styled.headerTitleWrapper}>
                    <h2 className={styled.headerTitle}>Elegant tableware collection for your cosiness</h2>
                
                    <div className={styled.headerImage1} />
                    <div className={styled.headerImage2} />
                    <div className={styled.headerImage3} />
                    <span className={styled.headerEllipseContainer}>
                        {ellipse.map((i) => {
                            return (
                                <span className={styled.headerEllipse}>{i.icon}</span>
                            )     
                    })}
                        <span className={styled.ellipseText}>Go to the catalog</span>
                    </span>
                </div>
            </div>
        </>
    )
}

export default Header;