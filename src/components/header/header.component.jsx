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
            {/* <div className={styled.headerWrapper}> */}
                {/* <span className={styled.starSvgContainer}>
                    <span className={styled.starSvg}>
                        <StarIcon />
                    </span>
                </span> */}
                
                {/* <div className={styled.headerTitleWrapper}>
                    <div className={styled.headerTitle}>Elegant tableware collection for your cosiness</div>
                </div> */}
                    <div className={styled.container}>
                        <div className={styled.headerTitle}>
                            <div className={styled.title}>Elegant tableware collection for your cosiness</div>
                        </div>
                        <div className={styled.headerImageOneContainer}>
                            <img src={headerImage1} alt='alt' className={styled.headerImageOne} />
                        </div>
                       <div className={styled.headerImageTwoContainer}>
                            <img src={headerImage2} alt='alt' className={styled.headerImageTwo} />
                        </div>
                    </div> 
                    {/* <div className={styled.headerEllipseContainer}>
                        <img src={ellipseButton} alt="alt" className={styled.headerEllipse} />
                        <h2 className={styled.headerEllipseText}>Go to the catalog</h2>
                    </div> */}
            {/* </div> */}
        </>
    )
}

export default Header;