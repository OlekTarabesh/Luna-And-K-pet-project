import React from 'react'

import { footerItems } from '../footerDB' 

import styled from './ctlg-column.module.css'

const CatalogColumn = () => {
    const { catalog } = footerItems;
  return (
    <div className={styled.catalogContainer}>
        <div className={styled.catalog}>
            <h3 className={styled.catalogTitle}>Catalog</h3>
            {catalog.map(i => {
                return <span key={Math.random()} className={styled.item}>{i.item}</span>
            })}
        </div>
</div>
  )
}

export default CatalogColumn
