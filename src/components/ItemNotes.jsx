import React from 'react'

export const ItemNotes = (props) => {
    
  return (
    <li>
        <span>Note</span>
        <p>{props.text}</p>
        <span>X</span>
    </li>
  )
}
