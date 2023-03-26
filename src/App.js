import React from 'react';
import './App.css';
import { CreateNoteButton } from './CreateNoteButton';
import { NoteCounter } from './NoteCounter';
import { NoteItem } from './NoteItem';
import { NoteList } from './NoteList';
import { NoteSearch } from './NoteSearch';

const notes = [
  {text:'primera nota', completed:false},
  {text:'segunda nota', completed:true},
  {text:'tercera nota', completed:false},
  
]
function App() {

  return (
    <React.Fragment>
        <NoteCounter/>
      
        <NoteSearch/>
  
        <NoteList>
          {notes.map(note =>(
                  <NoteItem 
                    key={note.text} 
                    text={note.text}
                    complete={note.completed}
                  />
          ))}
        </NoteList>
        <CreateNoteButton/>
        <button>+</button>
    </React.Fragment>
   
  );
}

export default App;
