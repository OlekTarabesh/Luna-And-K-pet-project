import { useState } from 'react';

import ArrowLeftBtn from '../arrow-left-button.component/arrow-left-button.jsx';
import ArrowRightBtn from '../arrow-right-button/arrow-right-button.jsx';
import ProgressBar from '../progress-bar/progress-bar.jsx';
import { sliderDoc } from './slider.db.js';
import styled from './slider.module.css';


const Slider = () => {
    // const { item } = sliderDoc;

    const [slideIndex, setSlideIndex] = useState(1);
    const length = 4;

    const nextProduct = () => {
        const newSlideIndex = slideIndex + 1;
            setSlideIndex(newSlideIndex >= length ? 0 : newSlideIndex);
    }
    
    const prevProduct = () => {
        const newSlideIndex = slideIndex - 1;
        setSlideIndex(newSlideIndex < 0 ? length - 1 : newSlideIndex)
    }

    return (
        <>
        <div><ProgressBar /></div>
            <span className={styled.title} id='bestsellers'>bestsellers</span>
            <div className={styled.sliderContainer}>
                <ArrowRightBtn moveSlide={nextProduct}/>
                <ArrowLeftBtn moveSlide={prevProduct}/>
                {sliderDoc.map((i) => {
                    return (
                        <div
                        key={i.id}
                        className={styled.productBlock}
                        >
                            <img 
                                src={require('../../assets/catalog-jpeg/' + i.image + '.jpg')} 
                                alt='img'
                                className={styled.img} 
                            />
                            <span className={styled.productName}>{i.name}</span>
                            <span className={styled.productPrice}>{i.price}</span>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default Slider;

