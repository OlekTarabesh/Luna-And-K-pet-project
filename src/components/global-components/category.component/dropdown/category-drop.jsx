import styled from "./category-drop.module.css";

const DropdownCategory = () => {
  return (
    <div className={styled.wrapper}>
      <div className={styled.container}>
        <ul className={styled.uList}>
          <li className={styled.list}>some categories</li>
        </ul>
      </div>
    </div>
  );
};

export default DropdownCategory;
