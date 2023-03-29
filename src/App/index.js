import React from 'react';
import './App.css';

import { NoteProvider } from '../NoteContext';
import {AppUI} from './AppUI'


function App() {
  return (
    <NoteProvider>
        <AppUI />
    </NoteProvider>
   
  );
}

export default App;
