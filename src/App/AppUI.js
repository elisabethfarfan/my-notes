import React, {useContext} from 'react'

import { NoteContext } from '../NoteContext';
import { CreateNoteButton } from '../CreateNoteButton/';
import { NoteCounter } from '../NoteCounter';
import { NoteItem } from '../NoteItem';
import { NoteList } from '../NoteList';
import { NoteSearch } from '../NoteSearch';
import { Modal } from '../Modal';
import { NoteForm } from '../NoteForm';

export const AppUI = () => {

  const {error, 
    loading, 
    searchedNotes, 
    completeNote, 
    deleteNote,  
    openModal,
    setOpenModal
  } = useContext(NoteContext)

  return (
    <React.Fragment>
        <NoteCounter />      
        <NoteSearch />              
            <NoteList>
              {error && <p>Desespérate, hubo un error...</p>}
              {loading && <p>Estamos cargando no desesperes...</p>}
              {(!loading && !searchedNotes.length) && <p>¡Crea tu primera Nota!</p>}
    
              {searchedNotes.map(note =>(
                      <NoteItem 
                        key={note.text} 
                        text={note.text}
                        complete={note.completed}
                        onComplete={() =>completeNote(note.text)}
                        onDelete ={() => deleteNote(note.text)}
                      />
                ))}
            </NoteList>  
        {openModal && (
          <Modal>
            <NoteForm></NoteForm>
          </Modal>
        )}
        <CreateNoteButton
          setOpenModal={setOpenModal}
        />
        {/* <button>+</button> */}
    </React.Fragment>
  )
}
