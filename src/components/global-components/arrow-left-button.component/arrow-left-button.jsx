import arrowLeft from "../../../icons/arrows/arrow-left.svg";
import styled from "./arrow-left-button.module.css";

const ArrowLeftBtn = ({ onClick }) => {
  return (
    <button onClick={onClick} className={styled.arrowLeftBtn}>
      <img src={arrowLeft} alt="arrowR" />
    </button>
  );
};

export default ArrowLeftBtn;
