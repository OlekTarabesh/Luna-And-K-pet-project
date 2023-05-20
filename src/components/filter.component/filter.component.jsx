import { ArrowDown } from "../../icons/arrows/arrow-down/arrow-down"
import styled from './filter.module.css';

const Filter = ({onClick}) => {

    return (
        <div onClick={onClick}>
            <div className={styled.filterContainer}>
                <div className={styled.filter}>
                    Filter by
                    <span className={styled.filterArrow}>
                        <ArrowDown />
                    </span> 
                </div>
            </div>
        </div>
    )
}

export default Filter;