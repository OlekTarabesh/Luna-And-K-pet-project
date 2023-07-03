import { useState } from "react";

import { ArrowDown } from "../../../icons/arrows/arrow-down/arrow-down"
import FilterDrop from "./dropdown/filter-drop";

import styled from './filter.module.css';

const Filter = ({onClick}) => {
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
                <div className={styled.filterContainer}>
                    <div className={styled.filter}>
                        Filter by
                        <span className={styled.filterArrow}>
                            <ArrowDown />
                        </span> 
                    </div>
                </div>
            </div>
            {clicked ? <FilterDrop /> : null}
        </>
    )
}

export default Filter;