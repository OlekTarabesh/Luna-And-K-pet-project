import { useState } from "react";

import { ArrowDown } from "../../../icons/arrows/arrow-down/arrow-down";

import styled from './category.module.css';
import DropdownCategory from "./dropdown/category-drop";


const Category = () => {
    const [ clicked, setClicked ] = useState(false);

    const showDropdown = () => {
        if(!clicked) {
            setClicked(true);
        } else {
            setClicked(false); 
        }
    }

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
    )
}

export default Category;