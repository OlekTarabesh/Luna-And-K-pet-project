// import { Link } from "react-router-dom";
import headerImage1 from '../../images/header-images/headerImg.png';
import headerImage2 from '../../images/header-images/headerImg2.png';
import ellipseButton from '../../images/header-images/ellipse-button.png';
import { StarIcon } from "../../icons/star-1-icon.jsx";
import { ellipses } from '../../icons/ellipses/ellipse.data.js';
import styled from './header.module.css';

const Header = () => {
    const { ellipse } = ellipses;
    return (
        <>
            <div className={styled.headerWrapper}>
                {/* <div className={styled.headerContainer}>
                    <span className={styled.starSvg}>
                        <StarIcon />
                    </span>
                </div> */}
                
                    <div className={styled.headerImage1Container}>
                        <img src={headerImage1} alt='alt' className={styled.headerImage1} />
                    </div> 
                       <div className={styled.headerImage3Container}>
                            <img src={headerImage2} alt='alt' className={styled.headerImage3} />
                        </div>
                <div className={styled.headerTitleWrapper}>
                    <h2 className={styled.headerTitle}>Elegant tableware collection for your cosiness</h2>
                </div>
                    <div className={styled.headerEllipseContainer}>
                        <img src={ellipseButton} alt="alt" className={styled.headerEllipse} />
                        <h2 className={styled.headerEllipseText}>Go to the catalog</h2>
                        {/* {ellipse.map((i) => {
                            return (
                                <span key={Math.random()} className={styled.headerEllipse}>{i.icon}</span>
                                )     
                            })}
                            <span className={styled.ellipseText}>Go to the catalog</span> */}
                    </div>
            </div>
        </>
    )
}

export default Header;