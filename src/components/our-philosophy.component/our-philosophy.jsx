import ellipsePhilBtn from "../../icons/ellipses/ellipsePhilBtn.png";
import styled from "./our-philosophy.module.css";

const Philosophy = () => {
  return (
    <div className={styled.wrapper}>
      <div className={styled.title}>our philosophy</div>
      <div className={styled.container}>
        <div className={styled.content}>
          <section className={styled.descr}>
            <p className={styled.text}>
              Our main slogan is ecological, beautiful and strong. Tableware
              made exclusively by natural materials, which strong and long-term
              service.
            </p>
            <p className={styled.textSecond}>
              However, the dishes look incredibly elegant and elegant,
              necessarily fit into your interior. Our mission is to balance
              comfort and beauty.
            </p>
            <div className={styled.btnContainer}>
              <button className={styled.btn}>
                <img
                  src={ellipsePhilBtn}
                  alt="btn"
                  className={styled.btnImage}
                />
              </button>
            </div>
          </section>

          <section className={styled.imagesContainer}>
            <div className={styled.woodenContainer}>
              <img
                src={require("../../assets/philosophy/wooden-cutlery.png")}
                alt="alt"
                className={styled.woodenCutleryImg}
              />
            </div>
            <div className={styled.cupImgContainer}>
              <img
                src={require("../../assets/philosophy/cup.png")}
                alt="alt"
                className={styled.cupImg}
              />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Philosophy;
