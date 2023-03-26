import React from 'react';
import './CreateNoteButton.css'

export const CreateNoteButton = () => {
  const onClickButton = () =>{
    alert('click')
  }
  return (
    <div 
      className='CreateNoteButton'
      onClick={()=> onClickButton()}
    >
      +
    </div>
  )
}
