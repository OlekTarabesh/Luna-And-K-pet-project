import { useRef, useEffect, useState } from "react";

import ArrowLeftBtn from "../global-components/arrow-left-button.component/arrow-left-button";
import ArrowRightBtn from "../global-components/arrow-right-button.component/arrow-right-button";
import styled from "./slider.module.css";

import { sliderDoc } from "./slider-data";

const Slider = () => {
  const TOTAL_SLIDES = sliderDoc.length;

  const [current, setCurrent] = useState(1);

  const ref = useRef(null);

  const next = () => {
    if (current + 2 < TOTAL_SLIDES) {
      return setCurrent(current + 1);
    }
    return setCurrent(1);
  };

  const prev = () => {
    if (current - 1 < 1) {
      return setCurrent(4);
    }
    return setCurrent(current - 1);
  };

  useEffect(() => {
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
            <ArrowLeftBtn onClick={prev} />
            <ArrowRightBtn onClick={next} />
          </div>
        </section>
      </div>
      <section className={styled.sliderWrapper}>
        <div className={styled.sliderView}>
          <div current={current} ref={ref} className={styled.productContainer}>
            {sliderDoc.map((i) => (
              <div key={Math.random()} className={styled.card}>
                <div className={styled.imageContainer}>
                  <img
                    id={i.id}
                    src={require("../../assets/catalog-jpeg/" +
                      i.image +
                      ".jpg")}
                    alt="alt"
                    className={styled.image}
                  />
                </div>
                <h4 className={styled.productName}>{i.name}</h4>
                <span className={styled.price}>{i.price}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Slider;
