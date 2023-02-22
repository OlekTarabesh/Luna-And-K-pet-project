import { useRef, useEffect, useState } from 'react';

import arrowL from '../../icons/arrows/arrow-left.svg';
import arrowR from '../../icons/arrows/arrow-right.svg';
import styled from './second-slider.module.css';
import { sliderDoc } from './data';


// const SecondSlider = () => {
//     // const containerRef = useRef(null),
//     //       images = useRef(null);
//     //       width = window.getComputedStyle(containerRef).width;

//     // containerRef.style.width = 100 * images.length + '%';
    

//     return (
//         <>
//         <h2 className={styled.title}>bestsellers</h2>
//         <ArrowRightBtn />
//         <ArrowLeftBtn />
//         <div className={styled.container}>
//             {sliderDoc.map((i) => {
//                 return (
//                     <div key={i.id} className={styled.card}>
//                             <img 
//                                 src={require('../../assets/catalog-jpeg/' + i.image + '.jpg')} 
//                                 alt={i.name} 
//                                 className={styled.image}/>
//                             <h4 className={styled.cardNameProd}>{i.name}</h4>
//                             <span className={styled.cardPrice}>{i.price}</span>
//                     </div>
//                 )
//             })}
//         </div>
//         </>
//     )
// }

// export default SecondSlider;


export const Carousel = () => {

    const TOTAL_SLIDES = 5; // n-1 in Array
    const width = `${400}px`;
  
      const [ current, setCurrent ] = useState(0);
      const ref = useRef(null);
      
      const next = () => {
        if ( current >= TOTAL_SLIDES ) return;
        else setCurrent(current + 1);
        console.log(next);
      }
      
      const prev = () => {
        if ( current === 0 ) return;
        else setCurrent(current - 1);
      }
      
      const desired = e => {
        setCurrent(Number(e.target.id));
      }
      
      useEffect(() => {
        ref.current.style.width = width;
        ref.current.style.transition = 'all 1s ease-in-out';
        ref.current.style.transform = `translateX(-${current}00%)`;
      }, [current]);
      
      return (
        <>
        <div className={styled.title}>bestsellers</div>
        <div className={styled.wrapper}>
            <div current={current} className={styled.container} ref={ref}>
              {sliderDoc.map((i) => (
                <div ref={ref} className={styled.products}>
                    <img 
                        // ref={ref}
                        key={i}
                        id={i.id}
                        src={require('../../assets/catalog-jpeg/' + i.image + '.jpg')} 
                        alt="alt" 
                        className={styled.image} />
                        <h4 className={styled.productName}>{i.name}</h4>
                        <span className={styled.price}>{i.price}</span>
                </div>
              ))}
              </div>
          <div className={styled.buttonContainer}>
            <button className={styled.buttonL} onClick={prev}>
                <img src={arrowL} alt="alt" />
            </button>
            <button className={styled.buttonR} onClick={next}>
                <img src={arrowR} alt="alt" />
            </button>
          </div>
        </div>
        </>
      )
    }
  