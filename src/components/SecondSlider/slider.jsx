import { useRef, useEffect, useState } from 'react';

import ArrowLeftBtn from '../arrow-left-button.component/arrow-left-button'
import ArrowRightBtn from '../arrow-right-button.component/arrow-right-button';
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
      // `${410}px`
      useEffect(() => {
        ref.current.style.margin = '5px 0 0 5px';
        ref.current.style.display = 'flex';
        ref.current.style.width = `${410}px`;
        ref.current.style.transition = 'all 1s ease-in-out';
        ref.current.style.transform = `translateX(-${current - 1}00%)`;
      }, [current]);
      
      return (
        <>
          <div className={styled.wrapper}>

            <section className={styled.titleContainer}>
              <div className={styled.title}>bestsellers</div>
            </section>

              <section className={styled.buttonWrapper}>
                <div className={styled.buttonContainer}>
                  <ArrowLeftBtn onClick={prev}/>
                  <ArrowRightBtn onClick={next}/>
                </div>
              </section>


          </div>
            <section className={styled.sliderWrapper}>
              <div className={styled.sliderView}>
                  <div current={current} ref={ref} 
                  // className={styled.productContainer}
                  >
                      {sliderDoc.map((i) => (
                        <div key={Math.random()} className={styled.products}>
                            <div className={styled.imageContainer}>
                              <img 
                                  id={i.id}
                                  src={require('../../assets/catalog-jpeg/' + i.image + '.jpg')} 
                                  alt="alt" 
                                  className={styled.image} />
                            </div>
                                <h4 className={styled.productName}>{i.name}</h4>
                                <span className={styled.price}>{i.price}</span>
                        </div>
                      ))}
                  </div>
              </div>
            </section>
        </>
      )
    }
  