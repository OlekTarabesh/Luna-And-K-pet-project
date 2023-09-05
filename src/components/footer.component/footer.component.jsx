import CatalogColumn from "./catalog-column/ctlg-column";
import InfoColumn from "./info-column/info-column";
import ContactsColumn from "./contacts-column/contacts-column";

import { MainLogo } from "../../icons/main-logo-Luna&K";

import styled from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styled.wrapper}>
      <div className={styled.container}>
        <div className={styled.hrContainer}>
          <hr className={styled.hr} />
        </div>

        <section className={styled.content}>
          <div className={styled.logoContainer}>
            <div className={styled.logo}>
              <MainLogo />
            </div>
          </div>
          <CatalogColumn />
          <InfoColumn />
          <ContactsColumn />
        </section>
      </div>
    </div>
  );
};

export default Footer;
