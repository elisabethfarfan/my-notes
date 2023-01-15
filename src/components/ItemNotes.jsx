import React from 'react'
import '../css/ItemNotes.css';
export const ItemNotes = (props) => {
    
  return (
    <li className='liNote'>
        <span className={`checkNote  ${props.completed && 'Icon-check--active'}`}>✔</span>
        <p className={`textNote ${props.completed && 'NoteItem-p--complete'}`}>{props.text}</p>
        <span className={`deleteNote ${props.completed && 'Icon-delete'}`}>X</span>
    </li>
  )
}
