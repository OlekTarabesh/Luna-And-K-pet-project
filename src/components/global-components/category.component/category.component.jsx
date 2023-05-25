import { ArrowDown } from "../../../icons/arrows/arrow-down/arrow-down";
import styled from './category.module.css';


const Category = ({onClick}) => {
    
    return (
        <div onClick={onClick}>
            <div className={styled.categoryContainer}>
                <div className={styled.category}>
                    Category
                    <span className={styled.categoryArrow}>
                        <ArrowDown />
                    </span> 
                </div>
            </div>
        </div>
    )
}

export default Category;