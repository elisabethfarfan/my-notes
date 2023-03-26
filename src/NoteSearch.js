import React from 'react';
import './NoteSearch.css'

export const NoteSearch = ({searchValue, setSearchValue}) => {
 

  const onSearchValueChange = (event) =>{
    setSearchValue(event.target.value);
    console.log(event.target.value);
  }
  return (

    <input  
      className="NoteSearch" 
      placeholder='notas'
      value={searchValue}
      onChange={onSearchValueChange}
    />
  )
}
