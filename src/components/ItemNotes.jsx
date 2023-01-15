import React from 'react'
import '../css/ItemNotes.css';
export const ItemNotes = (props) => {
    
  return (
    <li className='liNote'>
        <span className='checkNote'>✔</span>
        <p className='textNote'>{props.text}</p>
        <span className='deleteNote'>X</span>
    </li>
  )
}
