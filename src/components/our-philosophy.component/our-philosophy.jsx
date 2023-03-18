import { Fragment } from 'react';

import { StarIcon } from '../../icons/star-1-icon';
import ProgressBar from '../progress-bar/progress-bar';
import styled from './our-philosophy.module.css';



const Philosophy = () => {
    
    return(
        <>
        <div className={styled.progressBar}><ProgressBar /></div>
        <div className={styled.philosophyWrapper}>
            <div className={styled.title} id='our_philosophy'>our philosophy</div>
            <p className={styled.philosophyText}>
                Our main slogan is ecological, beautiful and strong. Tableware made exclusively by natural materials, which  strong and long-term service. 
                <br />
                <br />
                However, the dishes look incredibly elegant and elegant, necessarily fit into your interior. Our mission is to balance comfort and beauty.
            </p>
            <span className={styled.starSvg}><StarIcon /></span>
            <div className="images">
                <img 
                    src={require('../../assets/philosophy/wooden-cutlery.png')} 
                    alt="alt" 
                    className={styled.woodenCutleryImg}/>
                <img 
                    src={require('../../assets/philosophy/cup.png')} 
                    alt="alt"
                    className={styled.cupImg} />
            </div>
        </div>
        </>
    )
}

export default Philosophy;