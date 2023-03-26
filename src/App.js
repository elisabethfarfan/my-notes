import React from 'react';
import './App.css';
import { CreateNoteButton } from './CreateNoteButton';
import { NoteCounter } from './NoteCounter';
import { NoteItem } from './NoteItem';
import { NoteList } from './NoteList';
import { NoteSearch } from './NoteSearch';

const notesDefault = [
  {text:'primera nota', completed:false},
  {text:'segunda nota', completed:true},
  {text:'tercera nota', completed:false},
  
]
function App() {
  const [notes, setNotes] = React.useState(notesDefault);
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
    setNotes(newNotes)

  }

  const deleteNote = (text) =>{
    const indexText = notes.findIndex(note => note.text  === text)
    const newNotes = [...notes];
    newNotes.splice(indexText, 1)
    setNotes(newNotes)

  }

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
   
  );
}

export default App;
