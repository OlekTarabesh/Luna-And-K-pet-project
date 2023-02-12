import { ArrowDown } from "../../icons/arrows/arrow-down/arrow-down"
import styled from './category.module.css';


const Category = () => {
    
    return (
        <div className={styled.categoryWrapper}>
            <div className={styled.category}>
                Category
                <span className={styled.categoryArrow}>
                    <ArrowDown />
                </span> 
            </div>
        </div>
    )
}

export default Category;