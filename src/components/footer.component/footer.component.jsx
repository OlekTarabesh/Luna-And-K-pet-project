import { MainLogo } from '../../icons/main-logo-Luna&K';
import { Instagram } from '../../icons/socialMedias/instagram';
import { Facebook } from '../../icons/socialMedias/facebook';
import { Telegram } from '../../icons/socialMedias/telegram';
import { footerItems } from './footerDB';
import styled from './footer.module.css';


const Footer = () => {
    const { catalog, info, contacts } = footerItems;
    
    return (
        <div className={styled.wrapper}>
            <div className={styled.container}>

            <div className={styled.hrContainer}>
                <hr className={styled.hr}/>
            </div>

                <div className={styled.content}>
                {/* Catalog section */}
                    <div className={styled.logoContainer}>
                        <div className={styled.logo}><MainLogo /></div>
                    </div>

                    <div className={styled.catalogContainer}>
                        <div className={styled.catalog}>
                            <h3 className={styled.catalogTitle}>Catalog</h3>
                            {catalog.map(i => {
                                return <span key={Math.random()} className={styled.item}>{i.item}</span>
                            })}
                        </div>
                    </div>

                    {/* Info section */}
                    <div className={styled.infoContainer}>
                        <div className={styled.info}>
                            <h3 className={styled.infoTitle}>Info</h3>
                        {info.map(i => {
                            return <span key={Math.random()} className={styled.infoItem}>{i.item}</span>
                        })}
                        </div>
                    </div>

                    {/* Contacts section */}
                    <div className={styled.contactsContainer}>
                        <div className={styled.contacts}>
                            <h3 className={styled.contactsTitle}>contacts</h3>
                        {contacts.map(i => {
                            return <span key={Math.random()} className={styled.contactsItem}>{i.item}</span>
                        })}
                        </div>

                        {/* Social Media section */}
                        <div className={styled.iconsContainer}>
                            <span 
                                className={styled.icons}>
                                    <a href='https://www.instagram.com/aleksandrjazz/'>
                                            <Instagram />
                                    </a>
                            </span>
                            <span 
                                className={styled.icons}>
                                    <a href='https://www.facebook.com/profile.php?id=100006613427648'>
                                            <Facebook />
                                    </a>
                            </span>
                            <span 
                                className={styled.icons}>
                                    <a href='https://t.me/FancyMakar'>
                                            <Telegram />
                                    </a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;