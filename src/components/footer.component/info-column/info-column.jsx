import React from 'react'

import { footerItems } from '../footerDB'
import styled from './info-column.module.css'


const InfoColumn = () => {
    const { info } = footerItems;
    
  return (
    <div className={styled.infoContainer}>
        <div className={styled.info}>
            <h3 className={styled.infoTitle}>Info</h3>
        {info.map(i => {
            return <span key={Math.random()} className={styled.infoItem}>{i.item}</span>
        })}
        </div>
    </div>
  )
}

export default InfoColumn
