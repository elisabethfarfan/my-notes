import React from 'react';
import './App.css';

import {AppUI} from './AppUI'

// const notesDefault = [
//   {text:'primera nota', completed:false},
//   {text:'segunda nota', completed:true},
//   {text:'tercera nota', completed:false},
  
// ]
function useLocalStorage(itemName, initialValue){

    const localStorageItem = localStorage.getItem(itemName)
    let parseItem;

    if(!localStorageItem){
      localStorage.setItem(itemName, JSON.stringify(initialValue))
      parseItem = []
    }else{
      parseItem = JSON.parse(localStorageItem)
    }

    const [item, setItem] = React.useState(parseItem);

    const saveItem = (newItem) =>{
      const stringifiedNotes = JSON.stringify(newItem)
      localStorage.setItem(itemName, stringifiedNotes)
      setItem(newItem)
    }

    return [item, saveItem]

}

function App() {

  const [notes, saveNotes] = useLocalStorage('NOTES_V1', [])
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
