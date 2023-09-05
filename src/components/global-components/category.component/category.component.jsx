import { useState } from "react";

import DropdownCategory from "./dropdown/category-drop";

import { ArrowDown } from "../../../icons/arrows/arrow-down/arrow-down";

import styled from "./category.module.css";

const Category = () => {
  const [clicked, setClicked] = useState(false);

  const showDropdown = () => {
    if (!clicked) {
      setClicked(true);
    } else {
      setClicked(false);
    }
  };

  return (
    <>
      <div onClick={showDropdown}>
        <div className={styled.categoryContainer}>
          <div className={styled.category}>
            Category
            <span className={styled.categoryArrow}>
              <ArrowDown />
            </span>
          </div>
        </div>
      </div>
      {clicked ? <DropdownCategory /> : null}
    </>
  );
};

export default Category;
