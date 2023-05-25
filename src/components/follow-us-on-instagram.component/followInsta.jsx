import ArrowRightBtn from '../global-components/arrow-right-button.component/arrow-right-button';
import {InstaImages} from './followInsta-db.js';
import styled from './followInsta.module.css';


const FollowUsOnInstagram = () => {
    
    return (
        <div className={styled.wrapper}>
            <div className={styled.container}>
                <div className={styled.titleAndLink}>
                <span className={styled.title}>follow us on instagram</span> 
                    <a 
                        href='https://www.instagram.com/aleksandrjazz/' 
                        className={styled.linkOfInstagram}>

                        Follow @lunaofficial
                        
                        <div className={styled.arrowBtn}><ArrowRightBtn /></div>
                    </a>
                </div>

                <div className={styled.imgsContainer}>
                    {InstaImages.map((example) => (
                        <img 
                            key={Math.random()}
                            src={require('../../assets/follow-us-on-instagram/' + example.image + '.png')} 
                            alt="alt" 
                            className={styled.imgs}/>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default FollowUsOnInstagram;