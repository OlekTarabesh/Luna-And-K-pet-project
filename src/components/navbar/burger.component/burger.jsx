import { useState } from "react";
import { Link } from "react-router-dom";
import { header } from '../../../data.js';
import styled from './burger.module.css';

const Burger = () => {
    const [ isOpen, setIsOpen ] = useState(false);
    const [ burgerState, setBurgerState ] = useState({});

    const { navigation } = header;

    const burgerStateHandler = () => {
        setIsOpen((open) => !open);
        if(isOpen) {
            setBurgerState(() => {
                return
            })
        } else {
            setBurgerState(() => {
                return {display: 'inherit'}
            })
        }
    }

    return (
        <div className={styled.wrapper}>
            

            <nav className={styled.burgerMenu} style={burgerState}>
                {navigation.map((nav) => {
                    return (
                        <Link 
                            key={Math.random()} 
                            className={styled.burgerNav} 
                            to={`/${nav.name}`}
                            onClick={burgerStateHandler}
                            >
                                {nav.name}
                        </Link>
                    )
                })}
            </nav>

            <div 
                onClick={burgerStateHandler} 
                className={styled.burgerContainer}
            >
                <div className={`${!isOpen ? styled.burger : styled.burgerCross}`}></div>
                <div className={`${!isOpen ? styled.burger: styled.burgerCross}`}></div>
                <div className={`${!isOpen ? styled.burger : styled.burgerCross}`}></div>
            </div>
        </div>
    )
}
    
export default Burger;