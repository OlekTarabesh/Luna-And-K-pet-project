// import { Link } from "react-router-dom";
import headerImage1 from '../../images/header-images/headerImg.png';
import headerImage2 from '../../images/header-images/headerImg2.png';
import ellipseBtn from '../../icons/ellipses/headerEllipseBtn.png';
// import { EllipseBtn } from '../../icons/ellipses/headerEllipseBtn';
// import { StarIcon } from "../../icons/star-1-icon.jsx";
import styled from './header.module.css';

const Header = () => {
    return (
        <>
            <section className={styled.wrapper}>
                <header className={styled.container}>
                    <div className={styled.titleAndBtnBlock}>
                        <h1 className={styled.title}>Elegant tableware collection for your cosiness</h1>
                        <button className={styled.ellipseBtn}>
                            <img src={ellipseBtn} alt="alt" className={styled.ellipseBtnImage}/>
                        </button>
                    </div>
                    <div className={styled.mainImageContainer}>
                        <img src={headerImage1} alt='alt' className={styled.mainImage} />
                    </div>  
                    <div className={styled.sideImageContainer}>
                    <div className={styled.svgStar}></div>
                        <img src={headerImage2} alt='alt' className={styled.sideImage} />
                    </div>
                </header>
            </section>
            
        </>
    )
}

export default Header;

