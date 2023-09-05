import { Link } from "react-router-dom";

import ArrowRightBtn from "../global-components/arrow-right-button.component/arrow-right-button";
import { InstaImages } from "./followInsta-db.js";

import styled from "./followInsta.module.css";

const FollowUsOnInstagram = () => {
  return (
    <div className={styled.wrapper}>
      <div className={styled.container}>
        <section className={styled.titleAndLink}>
          <span className={styled.title}>follow us on instagram</span>
          <Link
            to="https://www.instagram.com/oleksandrtarabesh_/"
            className={styled.linkOfInstagram}
          >
            Follow @lunaofficial
            <div className={styled.arrowBtn}>
              <ArrowRightBtn />
            </div>
          </Link>
        </section>

        <section className={styled.imgsContainer}>
          {InstaImages.map((example) => (
            <img
              key={Math.random()}
              src={require("../../assets/follow-us-on-instagram/" +
                example.image +
                ".png")}
              alt="alt"
              className={styled.imgs}
            />
          ))}
        </section>
      </div>
    </div>
  );
};

export default FollowUsOnInstagram;
