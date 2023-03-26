import React from 'react';
import './App.css';

import {AppUI} from './AppUI'

// const notesDefault = [
//   {text:'primera nota', completed:false},
//   {text:'segunda nota', completed:true},
//   {text:'tercera nota', completed:false},
  
// ]
function App() {

  const localStorageNotes = localStorage.getItem('NOTES_V1')
  let parseNotes;

  if(!localStorageNotes){
    localStorage.setItem('NOTES_V1', JSON.stringify([]))
    parseNotes = []
  }else{
    parseNotes = JSON.parse(localStorageNotes)
  }

  const [notes, setNotes] = React.useState(parseNotes);
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

  const saveNotes = (newNotes) =>{
    const stringifiedNotes = JSON.stringify(newNotes)
    localStorage.setItem('NOTES_V1', stringifiedNotes)
    setNotes(newNotes)
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

  return (
   <AppUI
      completedNotes = {completedNotes}
      notesTotal = {notesTotal}
      searchValue = {searchValue}
      setSearchValue = {setSearchValue}
      searchedNotes = { searchedNotes}


      completeNote={completeNote}
      deleteNote ={deleteNote}
   />
   
  );
}

export default App;
