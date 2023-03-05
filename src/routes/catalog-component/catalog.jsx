import React from 'react';
import { useState, useEffect, Fragment } from 'react';
import { getCollectionAndDocuments } from '../../utils/firebase/firebase.js';

// import CATALOG_DATA from './catalog.db.js';
import Filter from '../../components/filter.component/filter.component.jsx';
import Category from '../../components/category.component/category.component.jsx';
// import { ArrowDown } from '../../icons/arrows/arrow-down/arrow-down.jsx';
import { StarIcon } from '../../icons/star-1-icon.jsx';
import { ellipses } from '../../icons/ellipses/ellipse.data.js';
import styled from './catalog.module.css';



const Catalog = () => {
    const { ellipse } = ellipses;
    const [ products, setProducts ] = useState([]);

    useEffect(() => {
        const getProductsMap = async () => {
            const productMap = await getCollectionAndDocuments();
            console.log(productMap);
            setProducts(productMap);
        };
        getProductsMap();
    }, [])
    
    // console.log(products.products);

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
                            <span key={Math.random()} className={styled.ellipses}>
                                <span className={styled.ellipsesText}>add to cart</span>
                                {el.icon}
                            </span>
                        )
                    })}
                </div>
                    <Fragment>
                        {products.products?.map((item) => (
                        <div key={Math.random()} className={styled.catalog}>
                            <span className={styled.catalogImageContainer}>
                            <img 
                                src={require('../../assets/catalog-jpeg/' + item.image + '.jpg')}
                                alt="catalog" 
                                className={styled.catalogImage}
                                    />
                            </span>
                            <span className={styled.catalogName}>{item.name}</span>
                                <br />
                            <span className={styled.catalogPrice}>{item.price}</span>
                        </div>
                    ))}
                    </Fragment>
            </div>
        </div>
        </>
    )
}




export default Catalog;






