import React from 'react'
import './NoteItem.css';

export const NoteItem = (props) => {

  const onComplete = () =>{
    alert(`La nota ${props.text} se ha completado`)
  }

  const onDelete = () =>{
    alert(`La nota ${props.text} se ha eliminado`)
  }
  return (
   <li className="NoteItem">
      <span 
        onClick={onComplete}
        className={`Icon Icon-check ${props.complete && 'Icon-check--active'}`}> 
      ✔
      </span>
        
      <p className={`NoteItem-p ${props.complete && 'NoteItem-p--complete'}`}>
        {props.text}
      </p>
      <span 
        onClick={onDelete}
        className="Icon Icon-delete">
        X
      </span>
    
   </li>
  )
}
