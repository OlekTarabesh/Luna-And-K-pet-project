import { Fragment } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { header } from '../../data.js';
import { MainLogo } from '../../icons/main-logo-Luna&K.jsx';
import styled from './navbar.module.css';


const Navbar = () => {
    const { navigation } = header;
    return (
        <Fragment>
            <div className={styled.navbarWrapper}>
                <a href='/' className={styled.navbarLogo}>
                    <MainLogo className={styled.navbarLogo} />
                </a>
                <ul className={styled.navbarUl}>
                    {navigation.map((navigation) => {
                        return (
                            <Link className={styled.navbarLi} to={`/${navigation.name}`}>
                                {navigation.name}
                            </Link>
                        )
                    })}
                </ul>
                <div className={styled.navbarIconsContainer}>
                    <span>{navigation.map((nav) => {
                        return (
                            <span className={styled.navbarIcons}>{nav.icon}</span>
                        )
                    })}
                    </span>
                </div>
            </div>
            <Outlet />
        </Fragment>
    )
}

export default Navbar; 