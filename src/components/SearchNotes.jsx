import React, { useState } from 'react'
import '../css/SearchNotes.css';
import lupa from '../images/lupa.png'


export const SearchNotes = ({searchValue, setSearchValue}) => {

  const onSearchChange = ({target}) =>{
      setSearchValue(target.value);
  }
  return (
    <>
    <div className='boxSearch'> 
        <input 
        placeholder='Search note'
        value={searchValue}
        onChange={onSearchChange}
        /> 
        
        <div className='boxImgLupa'>
          <img src={lupa} alt="img de lupa" /> 
        </div> 
    </div>
            <p>{searchValue}</p>
            </>
      
  )
}
