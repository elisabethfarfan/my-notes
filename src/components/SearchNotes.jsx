import React from 'react'
import '../css/SearchNotes.css';
import lupa from '../images/lupa.png'


export const SearchNotes = () => {
  return (
    <div className='boxSearch'> 
        <input placeholder='Search note'/>  
        <div className='boxImgLupa'>
          <img src={lupa} alt="img de lupa" /> 
        </div> 
    </div>
      
  )
}
