// import { Link } from "react-router-dom";
import headerImage1 from '../../images/header-images/headerImg.png';
import headerImage2 from '../../images/header-images/headerImg2.png';
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
                
                    <img src={headerImage1} alt='alt' className={styled.headerImage1} />
                    <img src={headerImage2} alt='alt' className={styled.headerImage3} />
                    <span className={styled.headerEllipseContainer}>
                        {ellipse.map((i) => {
                            return (
                                <span key={Math.random()} className={styled.headerEllipse}>{i.icon}</span>
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