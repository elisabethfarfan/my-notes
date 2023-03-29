import React, {useContext} from 'react';
import './NoteSearch.css'
import { NoteContext } from '../NoteContext';

export const NoteSearch = () => {
  const {searchValue, setSearchValue} = useContext(NoteContext)

  const onSearchValueChange = (event) =>{
    setSearchValue(event.target.value);
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
