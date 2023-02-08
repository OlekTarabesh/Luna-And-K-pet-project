import { ArrowLeft } from '../../icons/arrows/arrow-left';
import { ArrowRight } from '../../icons/arrows/arrow-right';
import styled from './second-block.module.css';


const SecondBlock = () => {

    return (
        <div className={styled.secondBlockWrapper}>
            <span className={styled.title}>bestsellers</span>
            <span className={styled.arrowLeft}><ArrowLeft /></span>
            <span className={styled.arrowRight}><ArrowRight /></span>
            <div className={styled.images}>
                <div className={styled.plate}><span className={styled.plateName}>Plate kafel’</span></div>
                <div className={styled.teaCapCollection}><span className={styled.teaCapCollectionName}>Tea - cup «Pollardi» collection</span></div>
                <div className={styled.finlandGlass}><span className={styled.finlandGlassName}>Finlland glass</span></div>
            </div>
        </div>
    )
}

export default SecondBlock;