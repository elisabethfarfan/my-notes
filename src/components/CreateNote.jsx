import '../css/CreateNote.css';
import React from 'react'
import post from '../images/descarga.jpg'

export const CreateNote = () => {
  return (
    <div className='createNote'>
      <h2>Create new Note</h2>
      <div >
        <h6>
          Note name
        </h6>
        <input placeholder='Write your note...'/>
      </div>      
      <button>Create note</button>
      <div className='imgNote'>
        <img src={post} alt='img de post'></img>
      </div>
    </div>
  )
}
