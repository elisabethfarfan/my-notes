import '../css/CreateNote.css';
import React from 'react'
import post from '../images/descarga.jpg'
import { useState } from 'react';

export const arrNotes = [];

export const CreateNote = () => {
   const [input, setInput] = useState('');


   const handleNote = ({target})=>{
    setInput(target.value);
   }
 

   const handleSubmit = (e) =>{
    e.preventDefault();
   }

    const saveNote = ()=>{
      arrNotes.push(input);
      console.log(arrNotes);
      setInput('')
      
    }
   return (
    <div className='createNote'>
      <h2>Create new Note</h2> 
      <form onSubmit={handleSubmit}> 
        <label> Note: </label>
            <input 
              type="text" 
              name="note" 
              value={input} 
              onChange={handleNote}
              placeholder="Write note..."
            />
          
          <button type="submit" value="Submit" onClick={saveNote}>Save</button>
      </form>
      <div className='imgNote'>
        <img src={post} alt='img de post'></img>
      </div>
    </div>
  )
}
