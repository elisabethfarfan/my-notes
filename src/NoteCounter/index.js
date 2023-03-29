import React, {useContext} from 'react';
import './NoteCounter.css';
import { NoteContext } from '../NoteContext';

export const NoteCounter = () => {
  const {completedNotes, notesTotal} = useContext(NoteContext)
  return (
    
    <h2 className='NoteCounter'>{`Haz completado ${completedNotes} de ${notesTotal} notas`}</h2>
  )
}
