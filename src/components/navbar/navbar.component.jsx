import { Link, Outlet } from 'react-router-dom';
import { header } from '../../data.js';
import { MainLogo } from '../../icons/main-logo-Luna&K.jsx';
import navbarStyle from './navbar.module.css';


const Navbar = () => {
    const { navigation } = header;
    return (
        <>
            <div className={navbarStyle.navbarWrapper}>
                <a href='/' className={navbarStyle.navbarLogo}>
                    <MainLogo className={navbarStyle.navbarLogo} />
                </a>
                <ul className={navbarStyle.navbarUl}>
                    {/*li написать link*/}
                    {navigation.map((navigation) => {
                        return (
                            <Link className={navbarStyle.navbarLi} to={`/${navigation.name}`}>
                                {navigation.name}
                            </Link>
                        )
                    })}
                </ul>
                <div className={navbarStyle.navbarIconsContainer}>
                    <span>{navigation.map((nav) => {
                        return (
                            <span className={navbarStyle.navbarIcons}>{nav.icon}</span>
                        )
                    })}
                    </span>
                </div>
            </div>
            <Outlet />
        </>
    )
}

export default Navbar; 