import React from 'react'


import { Instagram } from '../../../icons/socialMedias/instagram';
import { Facebook } from '../../../icons/socialMedias/facebook';
import { Telegram } from '../../../icons/socialMedias/telegram';
import { footerItems } from '../footerDB';

import styled from './contacts-column.module.css'

const ContactsColumn = () => {
    const { contacts } = footerItems;
  return (
    <div className={styled.contactsContainer}>
                        <div className={styled.contacts}>
                            <h3 className={styled.contactsTitle}>contacts</h3>
                        {contacts.map(i => {
                            return <span key={Math.random()} className={styled.contactsItem}>{i.item}</span>
                        })}
                        </div>

                        <div className={styled.iconsContainer}>
                            <span 
                                className={styled.icons}>
                                    <a href='https://www.instagram.com/oleksandrtarabesh_/'>
                                            <Instagram />
                                    </a>
                            </span>
                            <span 
                                className={styled.icons}>
                                    <a href='https://www.facebook.com/alexshaidy'>
                                            <Facebook />
                                    </a>
                            </span>
                            <span 
                                className={styled.icons}>
                                    <a href='https://t.me/ol_ek_s'>
                                            <Telegram />
                                    </a>
                            </span>
                        </div>
                    </div>
  )
}

export default ContactsColumn;
