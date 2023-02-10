import { ArrowDown } from '../../icons/arrows/arrow-down/arrow-down.jsx';
import { StarIcon } from '../../icons/star-1-icon.jsx';
import { catalog } from '../../data.js'; 
import styled from './catalog.module.css';
import React from 'react';



const Catalog = () => {
    const { items } = catalog;
    return (
        <div className={styled.catalogWrapper}>
            <h2 className={styled.title}>catalog</h2>
            <div className={styled.filter}>
                Filter by
                <span className={styled.filterArrow}>
                    <ArrowDown />
                </span> 
            </div>
            <div className={styled.categories}>
                Category 
                <span className={styled.filterArrow}>
                    <ArrowDown />
                </span>
            </div>
            <span className={styled.starIcon}><StarIcon /></span>
            <div className={styled.catalogContainer}>
                {items.map((item) => {
                    console.log(item.image);
                    return ( 
                        <div className={styled.catalogPrice}>
                            {/* <span className={styled.catalogImage}>{item.image}</span> */}
                            <img src={require(item.image)} alt="catalog" className={styled.catalogImage} />
                            {item.name} <br />
                            <span className={styled.catalogPrice}>{item.price}</span>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}




export default Catalog;


