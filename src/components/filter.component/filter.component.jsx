import { ArrowDown } from "../../icons/arrows/arrow-down/arrow-down"
import styled from './filter.module.css';
const Filter = () => {

    return (
        <div className="filterWrapper">
            <div className={styled.filter}>
                Filter by
                <span className={styled.filterArrow}>
                    <ArrowDown />
                </span> 
            </div>
        </div>
    )
}

export default Filter;