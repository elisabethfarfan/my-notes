import React from 'react'

export const CounterNotes = ({total, completed}) => {

  return (
    <>
      <h1>YOUR NOTES</h1>
      <h5>Completado {completed} de {total} notas</h5>
    </>
    
    )
}
