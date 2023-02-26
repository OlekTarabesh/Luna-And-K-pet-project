import { StarIcon } from '../../icons/star-1-icon';
import arrowR from '../../icons/arrows/arrow-right.svg';
import {InstaImages} from './followInsta-db.js';
import styled from './followInsta.module.css';


const FollowUsOnInstagram = () => {
    
    return (
        <div className={styled.wrapper}>
            <span className={styled.starIcon}><StarIcon /></span>
            <h2 className={styled.title}>follow us on instagram</h2>
            <a 
                href='https://www.instagram.com/aleksandrjazz/' 
                className={styled.linkOfInstagram}>
                Follow @lunaofficial
                <img 
                    src={arrowR} 
                    alt="alt"
                    className={styled.arrowR}/>
            </a>

            <div className={styled.examplesContainer}>
                {InstaImages.map((example) => (
                    <img 
                        src={require('../../assets/follow-us-on-instagram/' + example.image + '.png')} 
                        alt="alt" 
                        className={styled.examplesImg}/>
                ))}
            </div>
            <hr className={styled.hrLine}/>
        </div>
    )
}

export default FollowUsOnInstagram;