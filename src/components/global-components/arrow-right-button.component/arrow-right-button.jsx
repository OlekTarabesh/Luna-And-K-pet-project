import arrowRight from "../../../icons/arrows/arrow-right.svg";
import styled from "./arrow-right-button.module.css";

const ArrowRightBtn = ({ onClick }) => {
  return (
    <button onClick={onClick} className={styled.arrowRightBtn}>
      <img src={arrowRight} alt="arrowR" />
    </button>
  );
};

export default ArrowRightBtn;
