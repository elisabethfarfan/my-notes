import React from 'react';
import './CreateNoteButton.css'

export const CreateNoteButton = ({setOpenModal}) => {
  const onClickButton = () =>{
    setOpenModal(prevState => !prevState)
  }
  return (
    <div 
      className='CreateNoteButton'
      onClick={onClickButton}
    >
      +
    </div>
  )
}
