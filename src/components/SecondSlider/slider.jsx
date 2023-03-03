import { useRef, useEffect, useState } from 'react';

import arrowL from '../../icons/arrows/arrow-left.svg';
import arrowR from '../../icons/arrows/arrow-right.svg';
import styled from './slider.module.css';
import { sliderDoc } from './slider-data';


export const Slider = () => {

    const TOTAL_SLIDES = sliderDoc.length;
  
      const [ current, setCurrent ] = useState(1);
      const ref = useRef(null);
      
      const next = () => {
        if ( current + 2 < TOTAL_SLIDES ) {
          return setCurrent(current + 1);
        }
        return setCurrent(1);
      }
      const prev = () => {
        if ( current - 1 < 1 ) {
          return setCurrent(4);
          
        }
        return setCurrent(current - 1);
      }
      
      useEffect(() => {
        ref.current.style.width = `${400}px`;
        ref.current.style.transition = 'all 1s ease-in-out';
        ref.current.style.transform = `translateX(-${current - 1}00%)`;
      }, [current]);
      
      return (
        <>
        <div className={styled.title}>bestsellers</div>
        <div className={styled.wrapper}>
            <div current={current} className={styled.container} ref={ref}>
              {sliderDoc.map((i) => (
                <div key={Math.random()} className={styled.products}>
                    <img 
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
  