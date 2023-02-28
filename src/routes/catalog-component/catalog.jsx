import React from 'react';
import { useEffect } from 'react';
import { addCollectionAndDocuments } from '../../utils/firebase/firebase.js';

import CATALOG_DATA from './catalog.db.js';
import Filter from '../../components/filter.component/filter.component.jsx';
import Category from '../../components/category.component/category.component.jsx';
// import { ArrowDown } from '../../icons/arrows/arrow-down/arrow-down.jsx';
import { StarIcon } from '../../icons/star-1-icon.jsx';
import { ellipses } from '../../icons/ellipses/ellipse.data.js';
import styled from './catalog.module.css';



const Catalog = () => {
    const { ellipse } = ellipses;
    // const { items } = CATALOG_DATA;
    
    // useEffect(() => {
    //     addCollectionAndDocuments('products', CATALOG_DATA)
    // }, [])

    return (
        <>
        <div className={styled.hrContainer}>
            <hr className={styled.hr} />
        </div>
        <div className={styled.catalogWrapper}>
            <h2 className={styled.title}>catalog</h2>
            <Filter className={styled.filter} />
            <Category className={styled.categories}/>
            <span className={styled.starIcon}><StarIcon /></span>
            <span className={styled.starIcon2}><StarIcon /></span>
            <div className={styled.catalogContainer}>
                <div className={styled.ellipsesContainer}>
                    {ellipse.map((el) => {
                        return (
                            <span className={styled.ellipses}>
                                <span className={styled.ellipsesText}>add to cart</span>
                                {el.icon}
                            </span>
                        )
                    })}
                </div>
                {CATALOG_DATA.map((item) => {
                    return ( 
                        <div className={styled.catalog}>
                            <span className={styled.catalogImageContainer}>
                            <img 
                                src={item.image}
                                alt="catalog" 
                                className={styled.catalogImage}
                                 />
                            </span>
                            <span className={styled.catalogName}>{item.name}</span>
                                <br />
                            <span className={styled.catalogPrice}>{item.price}</span>
                        </div>
                    )
                })}
            </div>
        </div>
        </>
    )
}




export default Catalog;


