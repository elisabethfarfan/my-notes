import React from 'react'
import '../css/ListNotes.css';


export const ListNotes = (props) => {
  return (
   <section className='boxListNotes'>
    <ul>
      {props.children}
    </ul>
   </section>
  )
}
