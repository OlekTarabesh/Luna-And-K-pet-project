import { Fragment } from 'react';
import headerImage1 from '../../images/header-images/headerImg.png';
import headerImage2 from '../../images/header-images/headerImg2.png';
import ellipseBtn from '../../icons/ellipses/headerEllipseBtn.png';
import styled from './header.module.css';

const Header = () => {
    return (
        <Fragment>
            <div className={styled.wrapper}>

                <header className={styled.container}>
                    
                    <section className={styled.titleAndBtnBlock}>
                        <h1 className={styled.title}>Elegant tableware collection for your cosiness</h1>
                        <button className={styled.ellipseBtn}>
                            <img src={ellipseBtn} alt="alt" className={styled.ellipseBtnImage}/>
                        </button>
                    </section>

                    <div className={styled.mainImageContainer}>
                        <img src={headerImage1} alt='alt' className={styled.mainImage} />
                    </div>  
                    
                    <div className={styled.sideImageContainer}>
                        <img src={headerImage2} alt='alt' className={styled.sideImage} />
                    </div>

                </header>

            </div>
            
        </Fragment>
    )
}

export default Header;

