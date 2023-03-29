import React, { useState } from 'react'
import {useLocalStorage} from './useLocalStorage'

export const NoteContext = React.createContext()


export function NoteProvider(props){

  const [openModal, setOpenModal] = useState(false)
    // renombramos los valores que recibimos desde el useLocalStorage
  const {item:notes, saveItem:saveNotes, loading, error} = useLocalStorage('NOTES_V1', [])

  const [searchValue, setSearchValue] = React.useState('');

  const completedNotes = notes.filter((note) => !!note.completed).length
  const notesTotal = notes.length

  let  searchedNotes = [];
  if(!searchValue.length>=1){
    searchedNotes = notes
  }else{
      searchedNotes = notes.filter((note) => {
        const notesText = note.text.toLocaleLowerCase()
        const searchText = searchValue.toLocaleLowerCase()
        return notesText.includes(searchText)
     } )
  }

const addNote = (text) =>{
  const newNotes = [...notes];
    newNotes.push({
      completed: false,
      text:text
    })
    saveNotes(newNotes)
}

  const completeNote = (text) =>{
    const indexText = notes.findIndex(note => note.text  === text)
    const newNotes = [...notes];
    newNotes[indexText].completed = true;
    saveNotes(newNotes)

  }

  const deleteNote = (text) =>{
    const indexText = notes.findIndex(note => note.text  === text)
    const newNotes = [...notes];
    newNotes.splice(indexText, 1)
    saveNotes(newNotes)

  }

    return(
        <NoteContext.Provider 
        value = {{            
            loading,
            error,
            completedNotes,
            notesTotal,
            searchValue ,
            setSearchValue,
            searchedNotes,
            addNote,
            completeNote,
            deleteNote,
            openModal,
            setOpenModal
           }}>

            {props.children}

        </NoteContext.Provider>
    )
}
