import { Link } from "react-router-dom";

import { Instagram } from "../../../icons/socialMedias/instagram";
import { Facebook } from "../../../icons/socialMedias/facebook";
import { Telegram } from "../../../icons/socialMedias/telegram";
import { footerItems } from "../footerDB";

import styled from "./contacts-column.module.css";

const ContactsColumn = () => {
  const { contacts } = footerItems;
  return (
    <div className={styled.contactsContainer}>
      <section className={styled.contacts}>
        <h3 className={styled.contactsTitle}>contacts</h3>
        {contacts.map((i) => {
          return (
            <span key={Math.random()} className={styled.contactsItem}>
              {i.item}
            </span>
          );
        })}
      </section>

      <section className={styled.iconsContainer}>
        <span className={styled.icons}>
          <Link to="https://www.instagram.com/oleksandrtarabesh_/">
            <Instagram />
          </Link>
        </span>
        <span className={styled.icons}>
          <Link href="https://www.facebook.com/alexshaidy">
            <Facebook />
          </Link>
        </span>
        <span className={styled.icons}>
          <Link href="https://t.me/ol_ek_s">
            <Telegram />
          </Link>
        </span>
      </section>
    </div>
  );
};

export default ContactsColumn;
