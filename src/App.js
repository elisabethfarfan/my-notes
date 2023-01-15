import './App.css';
import React, { useState } from 'react'

import {CreateNote} from './components/CreateNote'
import {CounterNotes} from './components/CounterNotes'
import {SearchNotes} from './components/SearchNotes'
import {ListNotes} from './components/ListNotes'
import { ItemNotes } from './components/ItemNotes';


const notesListDefault = [
  {
  id:1,
  text:'primera nota',
  completed: true
},
{
  id:2,
  text:'segunda nota',
  completed: false
},
{
  id:3,
  text:'tercera nota',
  completed: true
}];
console.log(notesListDefault);

function App() {
  const [notesList, setNotesList] = useState(notesListDefault)
  const [searchValue, setSearchValue] = useState('');

  const completedNotes = notesList.filter(note => !!note.completed).length;
  const totalNotes = notesList.length;

  let searchNotes = [];
  if(!searchValue.length>=1){
      searchNotes = notesList;
  }else{
    searchNotes = notesList.filter(note =>{
      const noteText = note.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return noteText.includes(searchText);
    })
    
  }

  return (
    
    <div className='generalBox'> 
      <div className='boxNotes'>
        <CreateNote></CreateNote>
      </div>   
        
        <div className='boxNotes'>
          
          <CounterNotes 
            total = {totalNotes}
            completed = {completedNotes}
          ></CounterNotes>

          <SearchNotes 
            searchValue={searchValue} 
            setSearchValue={setSearchValue}>

          </SearchNotes>
          <ListNotes>
            {
            searchNotes.map(note => (
              <ItemNotes key= {note.id} text = {note.text}></ItemNotes>
            ))
            }
          </ListNotes> 
        </div>
          
    </div>  
  );
}

export default App;
