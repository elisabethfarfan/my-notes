import React from 'react'

import { CreateNoteButton } from '../CreateNoteButton/';
import { NoteCounter } from '../NoteCounter';
import { NoteItem } from '../NoteItem';
import { NoteList } from '../NoteList';
import { NoteSearch } from '../NoteSearch';

export const AppUI = ({
    completedNotes,
    notesTotal,
    searchValue,
    setSearchValue,
    searchedNotes,
    completeNote,
    deleteNote,

}) => {
  return (
    <React.Fragment>
        <NoteCounter
          completedNotes = {completedNotes}
          notesTotal = {notesTotal}
        />
      
        <NoteSearch
          searchValue = {searchValue}
          setSearchValue = {setSearchValue}
        />
  
        <NoteList>
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
        <CreateNoteButton/>
        {/* <button>+</button> */}
    </React.Fragment>
  )
}
