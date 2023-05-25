import { Fragment } from 'react';
import { Link, Outlet } from 'react-router-dom';

import Burger from './burger.component/burger.jsx';
import { header } from '../../data.js';
import { MainLogo } from '../../icons/main-logo-Luna&K.jsx';

import styled from './navbar.module.css';


const Navbar = () => {
    const { navigation } = header;
    return (
        <Fragment>
            <div className={styled.wrapper}>
                <div className={styled.content}>
                    <section className={styled.navbarLogoContainer}>
                        <Link to='/'className={styled.navbarLogo}>
                            <MainLogo />
                        </Link>
                    </section>

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

                    <section className={styled.navbarIconsContainer}>
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
                    </section>

                    <section className={styled.burger}>
                        <Burger />
                    </section>

                </div>
            </div>
            <Outlet />
        </Fragment>
    )
}

export default Navbar; 