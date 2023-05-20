import { Fragment } from 'react';
// import { StarIcon } from '../../icons/star-1-icon';
import aboutImage1 from '../../images/header-images/headerImg.png';
import aboutImage2 from '../../images/header-images/headerImg2.png';
import woodenCutleryImg from '../../images/woodenCutlery.png';
import Footer from '../../components/footer.component/footer.component';

import styled from './about.module.css';

const About = () => {


    return (
        <Fragment>
            <div className={styled.wrapper}>
                <div className={styled.hrContainer}>
                    <hr className={styled.hr} />
                </div>

                <div className={styled.titleContainer}>
                    <div className={styled.title}>About us</div>
                </div>
                
                <div className={styled.container}>

                    <main className={styled.header}>

                        <div className={styled.descrContainer}>
                            <p className={styled.firstDescr}>
                                Luna & K - its a company that have 10 years of experience. We work from 2012 year . Our online shop aims to make it as easy as possible to buy goods and get a consultation without leaving the house and without spending a lot of time. 
                            </p>

                            <p className={styled.secondDescr}>
                                We offer you to buy goods from our catalogue using convenient functionality. You can order from anywhere in the world. We want to improve and decorate your everyday life in the conditions of modern life. Also, we can guarantee the best quality of our dishes and the best quality of service, as we strive to remain at a high level
                            </p>
                        </div>

                        <div className={styled.firstImgsContainer}>
                           <div className={styled.mainImgContainer}><img src={aboutImage1} className={styled.mainImg} alt="alt" /></div>
                           <div><img src={aboutImage2} className={styled.secondImg} alt="alt" /></div>
                        </div>
                    </main>
                    {/* =========================================== */}
                    <section className={styled.philSec}>
                        
                        <div className={styled.philSecTitleContainer}> 
                            <h1 className={styled.philTitle}>our philosophy</h1>
                        </div>

                        <div className={styled.secondContainer}>

                            <div className={styled.cutleryImgContainer}>
                                <img src={woodenCutleryImg} className={styled.cutleryImg} alt="alt" />
                            </div>

                            <div className={styled.secondDescrContainer}>
                                <p className={styled.thirdDescr}>
                                    Our main slogan is ecological, beautiful and strong. Tableware made exclusively by natural materials, which  strong and long-term service. However, the dishes look incredibly elegant and elegant, necessarily fit into your interior. Our mission is to balance comfort and beauty.
                                </p>

                                <p className={styled.fourthDescr}>
                                    The quality of the materials and their temperature resistance are particularly noteworthy. Home is the most important place where it should be most pleasant to be. We designed the most pleasant and easy-to-use design. 
                                </p>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            <Footer />
        </Fragment>
    )
}

export default About;