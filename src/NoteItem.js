import React from 'react'
import './NoteItem.css';

export const NoteItem = (props) => {
  return (
   <li className="NoteItem">
      <span className={`Icon Icon-check ${props.complete && 'Icon-check--active'}`}> 
      ✔
      </span>
        
      <p className={`NoteItem-p ${props.complete && 'NoteItem-p--complete'}`}>
        {props.text}
      </p>
      <span className="Icon Icon-delete">
        X
      </span>
    
   </li>
  )
}
