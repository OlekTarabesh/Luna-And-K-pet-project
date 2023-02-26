import { Fragment } from 'react';
import Header from '../header/header.component';
// import SecondSlider from '../SecondSlider/second-slider';
import { Carousel } from '../SecondSlider/second-slider';
import Philosophy from '../our-philosophy.component/our-philosophy';
import DishesCategory from '../dishes-category.component/dishes-category';
// import Slider from '../slider-component/slider.component.jsx';
// import styled from './main-page.module.css';


const MainPage = () => {

    return (
        <Fragment>
            <Header />
            <Carousel />
            <Philosophy />
            <DishesCategory />
            {/* <Slider /> */}
        </Fragment>
    )
}

export default MainPage;