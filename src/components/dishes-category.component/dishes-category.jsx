import { Link } from "react-router-dom";
import { dishesCategory } from "./db-dishes";
import styled from "./dishes-category.module.css";

const DishesCategory = () => {
  return (
    <div className={styled.wrapper}>
      <div className={styled.container}>
        <section className={styled.imgsContainer}>
          <div className={styled.orangeImgWrapp}>
            <img
              src={require("../../assets/dishes-category/plateWithOrange.png")}
              alt="alt"
              className={styled.orangeImg}
            />
          </div>
          <div className={styled.forkAndKnifeImgWrapp}>
            <img
              src={require("../../assets/dishes-category/forkAndKnife.png")}
              alt="alt"
              className={styled.forkAndKnifeImg}
            />
          </div>
        </section>

        <section className={styled.categoryContainer}>
          {dishesCategory.map((d) => {
            return (
              <div key={Math.random()} className={styled.caregory}>
                {d.item}
              </div>
            );
          })}
          <div className={styled.linkContainer}>
            <Link to="catalog" className={styled.viewAllItems}>
              View all items
            </Link>
          </div>
        </section>

        <section className={styled.blackSpoonsContainer}>
          <img
            src={require("../../assets/dishes-category/twoBlackSpoons.png")}
            alt="alt"
            className={styled.blackSpoonsImg}
          />
        </section>
      </div>
    </div>
  );
};

export default DishesCategory;
