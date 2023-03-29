import React, { useContext, useState } from 'react'
import { NoteContext } from '../NoteContext'
import './NoteForm.css'

export function NoteForm(){

    const [newNoteValue, setNewNoteValue] = useState('')
    const {addNote, setOpenModal} = useContext(NoteContext)

    const onChange = (event)=>{
        setNewNoteValue(event.target.value)

    }
    const onCancel = ()=>{ 
        setOpenModal(false) 
    }

    const onSubmit = (event)=>{
        event.preventDefault()
        addNote(newNoteValue)
        onCancel()
      
    }

  return (
    <form onSubmit={onSubmit}>
      <label>Escribe tu nueva NOTA</label>
      <textarea
        value={newNoteValue}
        onChange={onChange}
        placeholder="Escribe tu nota..."
      />
      <div className="TodoForm-buttonContainer">
        <button
          type="button"
          className="TodoForm-button TodoForm-button--cancel"
          onClick={onCancel}
        
          >
          Cancelar
        </button>
        <button
          type="submit"
          className="TodoForm-button TodoForm-button--add"
        >
          Añadir
        </button>
     </div>
    </form>
  )
}
