import '../css/CreateNote.css';
import React from 'react'
import post from '../images/descarga.jpg'
import { useState } from 'react';

export const CreateNote = () => {
   const [note, setNote] = useState([]);

   const saveNote = ()=>{
      setNote(document.getElementById('notewrite').value);
   }
   console.log(note);
   return (
    <div className='createNote'>
      <h2>Create new Note</h2>

  
        <label>
          Note:
          <input type="text" name="name" id='notewrite'/>
        </label>
        <button type="submit" value="Submit" onClick={() => saveNote()}>Enviar</button>
      

      <div className='imgNote'>
        <img src={post} alt='img de post'></img>
      </div>
    </div>
  )
}
