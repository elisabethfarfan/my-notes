import React from 'react';
import './NoteList.css'

export const NoteList = (props) => {
  return (
   <section>
    <ul>
      {props.children}
    </ul>
   </section>
  )
}
