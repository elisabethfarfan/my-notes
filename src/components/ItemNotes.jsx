import React from 'react'
import '../css/ItemNotes.css';
export const ItemNotes = (props) => {
  console.log(props.completeTheNotes);
    
  return (
    <li className='liNote'>
        <span className={`checkNote  ${props.completed && 'Icon-check--active'}`}
        onClick={props.onCompleted}
        >
          ✔
        </span>

        <p className={`textNote ${props.completed && 'NoteItem-p--complete'}`}>{props.text}</p>
        <span className={`deleteNote ${props.completed && 'Icon-delete'}`}
        onClick={props.onDelete}
        >
          X
        </span>
    </li>
  )
}
