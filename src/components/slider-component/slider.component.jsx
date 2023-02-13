import { ArrowLeft } from '../../icons/arrows/arrow-left';
import { ArrowRight } from '../../icons/arrows/arrow-right';
import { sliderDoc } from './slider.db.js';
import styled from './slider.module.css';


const Slider = () => {
    const { item } = sliderDoc;
    return (
        <>
            <div className={styled.titleAndArrows}>
                <span className={styled.title}>bestsellers</span>
                <span className={styled.arrowLeft}><ArrowLeft /></span>
                <div className={styled.arrowRight}><ArrowRight /></div>
            </div>

            <div className={styled.sliderContainer}>
                {item.map((i) => {
                    return (
                        <div className={styled.sliderContent}>
                            <div className={styled.imageBlock}>
                                <img src={require('../../assets/catalog-jpeg/' + i.image + '.jpg')} alt="img" className={styled.sliderImage}/>
                            </div>
                                <span className={styled.sliderName}>{i.name}</span>
                                <span className={styled.sliderPrice}>{i.price}</span>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default Slider;

