import './App.css';
import React from 'react'

import {CreateNote} from './components/CreateNote'
import {CounterNotes} from './components/CounterNotes'
import {SearchNotes} from './components/SearchNotes'
import {ListNotes} from './components/ListNotes'
import { ItemNotes } from './components/ItemNotes';


const notesList = [
  {
    id:1,
    text: 'First note', 
    completed: false
  }
];

function App() {
  return (
    
    <div className='generalBox'> 
      <div className='boxNotes'>
        <CreateNote></CreateNote>
      </div>   
        
        <div className='boxNotes'>
          
          <CounterNotes></CounterNotes>
          <SearchNotes></SearchNotes>
          <ListNotes>
            {
            notesList.map(note => (
              <ItemNotes key= {note.id} text = {note.text}></ItemNotes>
            ))
            }
          </ListNotes> 
        </div>
          
    </div>  
  );
}

export default App;
