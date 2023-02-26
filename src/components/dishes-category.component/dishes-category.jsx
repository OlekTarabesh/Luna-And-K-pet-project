

import { dishesCategory } from './db-dishes';
import styled from './dishes-category.module.css';


const DishesCategory = () => {

    // const { dishes } = dishesCategory;

    return (
        <div className={styled.wrapper}>
            <img 
                src={require('../../assets/dishes-category/plateWithOrange.png')} 
                alt="alt" 
                className={styled.imgOrange}/>
            <img 
                src={require('../../assets/dishes-category/forkAndKnife.png')} 
                alt="alt" 
                className={styled.forkAndKnife} />
            <img 
                src={require('../../assets/dishes-category/twoBlackSpoons.png')} 
                alt="alt"
                className={styled.twoBlackSpoons} />
            {dishesCategory.map((d) => {
                return (
                   <div className={styled.caregory}>
                    {d.item}
                    
                    </div> 
                )
            })}
            <a href="#" className={styled.viewAllItems}>View all items</a>
        </div>
    )
}

export default DishesCategory;