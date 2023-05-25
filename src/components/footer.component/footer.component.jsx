
import { MainLogo } from '../../icons/main-logo-Luna&K';
import CatalogColumn from './catalog-column/ctlg-column';
import InfoColumn from './info-column/info-column';

import styled from './footer.module.css';
import ContactsColumn from './contacts-column/contacts-column';


const Footer = () => {
    
    return (
        <div className={styled.wrapper}>
            <div className={styled.container}>

            <div className={styled.hrContainer}>
                <hr className={styled.hr}/>
            </div>

                <div className={styled.content}>
                    
                    <div className={styled.logoContainer}>
                        <div className={styled.logo}><MainLogo /></div>
                    </div>

                    <CatalogColumn />

                    <InfoColumn />

                    <ContactsColumn />
                </div>
            </div>
        </div>
    )
}

export default Footer;