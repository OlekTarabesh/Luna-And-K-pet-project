import { Fragment } from 'react';
import Header from '../header/header.component';
// import SecondSlider from '../SecondSlider/second-slider';
import { Carousel } from '../SecondSlider/second-slider';
import Philosophy from '../our-philosophy.component/our-philosophy';
import DishesCategory from '../dishes-category.component/dishes-category';
import FollowUsOnInstagram from '../follow-us-on-instagram.component/followInsta';
import Footer from '../footer.component/footer.component';
// import Slider from '../slider-component/slider.component.jsx';
// import styled from './main-page.module.css';


const MainPage = () => {

    return (
        <Fragment>
            <Header />
            <Carousel />
            <Philosophy />
            <DishesCategory />
            <FollowUsOnInstagram />
            <Footer />
            {/* <Slider /> */}
        </Fragment>
    )
}

export default MainPage;