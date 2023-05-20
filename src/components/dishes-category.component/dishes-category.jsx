import { dishesCategory } from './db-dishes';
import styled from './dishes-category.module.css';


const DishesCategory = () => {

    return (
        <div className={styled.wrapper}>
            <div className={styled.container}>

                <div className={styled.imgsContainer}>
                    <div className={styled.orangeImgWrapp}>
                        <img 
                            src={require('../../assets/dishes-category/plateWithOrange.png')} 
                            alt="alt" 
                            className={styled.orangeImg}/>
                    </div>
                    <div className={styled.forkAndKnifeImgWrapp}>
                        <img 
                            src={require('../../assets/dishes-category/forkAndKnife.png')} 
                            alt="alt" 
                            className={styled.forkAndKnifeImg} />
                    </div>
                </div>

                <div className={styled.categoryContainer}>
                    {dishesCategory.map((d) => {
                        return (
                        <div key={Math.random()} className={styled.caregory}>
                            {d.item}
                        </div> 
                        )
                    })}
                    <div className={styled.linkContainer}><a href="catalog" className={styled.viewAllItems}>View all items</a></div>
                </div>

                <div className={styled.blackSpoonsContainer}>
                    <img 
                        src={require('../../assets/dishes-category/twoBlackSpoons.png')} 
                        alt="alt"
                        className={styled.blackSpoonsImg} />
                </div>

            </div>
        </div>
    )
}

export default DishesCategory;