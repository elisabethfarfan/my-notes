import './App.css';
import notes from './images/notes.png'
import addNote from './images/add.png'


function App() {
  return (
    <div className='noteBox'>
      <div className='nav'>
        <img src={notes} alt='logo notes'/>
      </div>
    
      <div className='addNoteBox'>
      <div className='introduce'>
        <p >Add your first note!</p>
      </div>
        <div className='addNote'>
          <img src={addNote} alt='add notes'/>
        </div>
      </div>
     
    </div>
  );
}

export default App;
