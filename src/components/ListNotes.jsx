import React from 'react'

export const ListNotes = (props) => {
  return (
   <section>
    <ul>
      {props.children}
    </ul>
   </section>
  )
}
