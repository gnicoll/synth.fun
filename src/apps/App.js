import logo from './logo.svg';
import React, { useEffect, useCallback  } from 'react';
import './App.css';
import { ReactSVG } from 'react-svg'
import Keyboard from '../components/keyboard/Keyboard';

function App() {
  const [notes, setNotes] = React.useState([undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined]);
  const [playedNote, setPlayedNote] = React.useState(-1);
  const [highlightNote, setHighlightNote] = React.useState(undefined);

  const assignNote = useCallback((num , n) => {
    
  }, []);

  
  function hoverSequenceHandler(num){
    if (notes.filter((n)=>n?.number===num)?.length !== 0)
      setHighlightNote(num);
  }

  return (
    <div className="App">
      <Keyboard onClick={assignNote} notes={notes} onHover={hoverSequenceHandler} playedNote={playedNote} highlightNote={highlightNote} />

    </div>
  );
}

export default App;
