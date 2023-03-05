import { Fragment } from 'react';
import { StarIcon } from '../../icons/star-1-icon';
import aboutImage1 from '../../images/header-images/headerImg.png';
import aboutImage2 from '../../images/header-images/headerImg2.png';
import woodenCutleryImg from '../../images/woodenCutlery.png';
import Footer from '../../components/footer.component/footer.component';

import styled from './about.module.css';

const About = () => {


    return (
        <Fragment>
            <div className={styled.wrapper}>
                <span className={styled.starIcon1}><StarIcon /></span>
                <h1 className={styled.title}>About us</h1>
                    <img src={aboutImage1} className={styled.img1} alt="alt" />
                    <img src={aboutImage2} className={styled.img2} alt="alt" />
                <span className={styled.descr1}>Luna & K - its a company that have 10 years of experience. We work from 2012 year . Our online shop aims to make it as easy as possible to buy goods and get a consultation without leaving the house and without spending a lot of time. 
                </span>

                <span className={styled.descr2}>
                We offer you to buy goods from our catalogue using convenient functionality. You can order from anywhere in the world. We want to improve and decorate your everyday life in the conditions of modern life. Also, we can guarantee the best quality of our dishes and the best quality of service, as we strive to remain at a high level
                </span>

                <span className={styled.starIcon2}><StarIcon /></span>

                <h1 className={styled.philosophy}>our philosophy</h1>

                <img src={woodenCutleryImg} className={styled.woodenCutleryImg} alt="alt" />

                <span className={styled.descr3}>Our main slogan is ecological, beautiful and strong. Tableware made exclusively by natural materials, which  strong and long-term service. However, the dishes look incredibly elegant and elegant, necessarily fit into your interior. Our mission is to balance comfort and beauty.
                </span>

                <span className={styled.descr4}>
                The quality of the materials and their temperature resistance are particularly noteworthy. Home is the most important place where it should be most pleasant to be. We designed the most pleasant and easy-to-use design. 
                </span>
            </div>
            <Footer />
        </Fragment>
    )
}

export default About;