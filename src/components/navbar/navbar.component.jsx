import { Fragment } from 'react';
import { Link, Outlet } from 'react-router-dom';

import Burger from '../burger.component/burger.jsx';
import { header } from '../../data.js';
import { MainLogo } from '../../icons/main-logo-Luna&K.jsx';
import styled from './navbar.module.css';


const Navbar = () => {
    const { navigation } = header;
    return (
        <Fragment>
            <div className={styled.navbarWrapper}>
                <div className={styled.navbarLogoContainer}>
                    <a href='/'className={styled.navbarLogo} >
                        <MainLogo />
                    </a>
                </div>
                <nav className={styled.navContainer}>
                    <ul className={styled.navbarUl}>
                        {navigation.map((navigation) => {
                            return (
                                <Link key={Math.random()} className={styled.navbarLi} to={`/${navigation.name}`}>
                                    {navigation.name}
                                </Link>
                            )
                        })}
                    </ul>
                </nav>
                <div className={styled.navbarIconsContainer}>
                    {navigation.map((nav) => {
                        return (
                            nav.icon ? (
                                <div 
                                key={Math.random()} 
                                className={styled.navbarIcon}
                                >
                                        {nav.icon}
                                    </div>
                                ) : null
                                ) 
                            })}
                    
                </div>
                    <Burger />
            </div>
            <Outlet />
        </Fragment>
    )
}

export default Navbar; 