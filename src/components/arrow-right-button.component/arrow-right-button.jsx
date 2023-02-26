import arrowRight from '../../icons/arrows/arrow-right.svg';
import styled from './arrow-right-button.module.css';
    

const ArrowRightBtn = ({next}) => {
        
    console.log('nextProduct');




    return (
        <button 
            onClick={next}
            className={styled.arrowRightBtn}>
            <img 
            src={arrowRight}
            alt="arrowR"
            />
        </button>
    )
}

export default ArrowRightBtn;