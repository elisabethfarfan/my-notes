import React from 'react';
import './NoteCounter.css';

export const NoteCounter = ({completedNotes, notesTotal}) => {
  return (
    <h2 className='NoteCounter'>{`Haz completado ${completedNotes} de ${notesTotal} notas`}</h2>
  )
}
