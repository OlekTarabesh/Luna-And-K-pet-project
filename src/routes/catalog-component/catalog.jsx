import React from 'react';
import { useState, useEffect, Fragment } from 'react';

import { getCollectionAndDocuments } from '../../utils/firebase/firebase.js';

import Filter from '../../components/filter.component/filter.component.jsx';
import Category from '../../components/category.component/category.component.jsx';
import arrowL from '../../icons/arrows/arrow-left.svg';
import arrowR from '../../icons/arrows/arrow-right.svg';
import Footer from '../../components/footer.component/footer.component.jsx';
import styled from './catalog.module.css';



const Catalog = () => {
    const [ products, setProducts ] = useState([]);

    // if i'll change any data information and i'll need to update it in firebase
    // useEffect(() => {
    //     console.log('done');
    //     addCollectionAndDocuments('products', CATALOG_DATA);
    //     }, []);

    useEffect(() => {
        const getProductsMap = async () => {
            const productMap = await getCollectionAndDocuments();
            setProducts(productMap);
        };
        getProductsMap();
    }, [])
    

    return (
        <Fragment>
            <div className={styled.wrapper}>
                
            <div className={styled.hrContainer}>
                <hr className={styled.hr} />
            </div>

            <div className={styled.titleContainer}>
                <div className={styled.filter}>
                    <Filter onClick={() => {}} />
                </div>

                <div className={styled.title}>catalog</div>

                <div className={styled.categories}>
                    <Category onClick={() => {}}/>
                </div>
            </div>


                <div className={styled.container}>
                    {products.products?.map((item) => (
                    <div key={Math.random()} className={styled.catalog}>
                        <div className={styled.catalogImageContainer}>
                            <img 
                                src={require('../../assets/catalog-jpeg/' + item.image + '.jpg')}
                                alt="catalog" 
                                className={styled.catalogImage}
                                    />
                                    
                            <span className={styled.catalogName}>{item.name}</span>
                                <br />
                            <span className={styled.catalogPrice}>{item.price}</span>
                        </div>
                    </div>
                ))}
                </div>
                        <div className={styled.buttonContainer}>
                            <button className={styled.buttonL}><img src={arrowL} alt='alt'/></button>
                            1   2  ...   3   4
                            <button className={styled.buttonR}><img src={arrowR} alt='alt'/></button>
                        </div>
            </div>

            <Footer />
        </Fragment>
    )
}




export default Catalog;






