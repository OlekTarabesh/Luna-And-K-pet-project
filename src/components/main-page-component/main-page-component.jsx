import Header from '../header/header.component';
import Slider from '../slider/slider';
import Philosophy from '../our-philosophy.component/our-philosophy';
import DishesCategory from '../dishes-category.component/dishes-category';
import FollowUsOnInstagram from '../follow-us-on-instagram.component/followInsta';
import Footer from '../footer.component/footer.component';

import styled from './main-page.module.css';


const MainPage = () => {

    return (
        <div className={styled.mainPage}>
            <div className={styled.content}>
                <Header />
                <Slider />
                <Philosophy />
                <DishesCategory />
                <FollowUsOnInstagram />
                <Footer />
            </div>
        </div>
    )
}

export default MainPage;