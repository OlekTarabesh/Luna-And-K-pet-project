import arrowLeft from '../../icons/arrows/arrow-left.svg';
import styled from './arrow-left-button.module.css';

const ArrowLeftBtn = ({moveSlide}) => {
    console.log('prevProduct');
    return (
        <button 
            onClick={moveSlide}
            className={styled.arrowLeftBtn}>
            <img 
            src={arrowLeft}
            alt="arrowR"
             />
        </button>
    )
}

export default ArrowLeftBtn;