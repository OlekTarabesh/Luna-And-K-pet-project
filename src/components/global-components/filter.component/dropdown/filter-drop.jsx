import React from 'react';


import styled from './filter-drop.module.css'

const FilterDrop = () => {
  return (
    <div className={styled.wrapper}>
      <div className={styled.container}>
        <ul className={styled.uList}>
            <li className={styled.list}>
                some filters
            </li>
        </ul>
      </div>
    </div>
  )
}

export default FilterDrop;