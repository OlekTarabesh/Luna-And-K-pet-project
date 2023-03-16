import { useState } from 'react';
import { Link } from 'react-router-dom';

import { header } from '../../data.js';
import styled from './burger.module.css';

const Burger = () => {
    const [ isOpen, setIsOpen ] = useState(false);
    const [ closeOpen, setCloseOpen ] = useState({});
    const { navigation } = header;


    const burgerHandler = () => {
        setIsOpen((open) => !open);
        if(isOpen) {
            setCloseOpen(() => {
                return
            })
        } else {
            setCloseOpen(() => {
                return { display: 'flex' }
            })
        }
    }

    return (
        <nav className={styled.navBurgerWrapper}>
            <div className={styled.btnContainer}>
                {isOpen ? <button className={styled.closeBurger} onClick={burgerHandler}>
                    <span className={styled.spanClose1}></span>
                    <span className={styled.spanClose2}></span>
                </button>
                : <button className={styled.openBurger} onClick={burgerHandler}>
                    <span className={styled.spanOpen1}></span>
                    <span className={styled.spanOpen2}></span>
                    <span className={styled.spanOpen3}></span>
                </button>}
            </div>
                
            <div className={styled.navbarMenu} style={closeOpen}>
                <ul className={styled.navbarUl}>
                <button className={styled.closeBurger} onClick={burgerHandler}>
                    <span className={styled.spanClose1}></span>
                    <span className={styled.spanClose2}></span>
                </button>
                    {navigation.map((navigation) => {
                        return (
                            <Link 
                                key={Math.random()} 
                                className={styled.navbarLi} 
                                to={`/${navigation.name}`}
                                onClick={burgerHandler}
                                >
                                    {navigation.name}
                            </Link>
                        )
                    })}
                </ul>
            </div>
        </nav>
    )
}

export default Burger;