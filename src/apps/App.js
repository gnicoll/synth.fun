import logo from './logo.svg';
import React, { useEffect, useCallback, useRef  } from 'react';
import './App.css';
import { ReactSVG } from 'react-svg'
import Keyboard from '../components/keyboard/Keyboard';
import Sequence from '../components/Sequence/Sequence';
import * as Tone from 'tone';

function App() {
  console.log("Rendered App.js")
  const [notes, setNotes] = React.useState([undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined]);
  const [playedNote, setPlayedNote] = React.useState({number: undefined, note: undefined});
  const [highlightNote, setHighlightNote] = React.useState(undefined);
  const [selectedStep, setSelectedStep] = React.useState(0);

  
  function SelectSequenceStep(num){
    setSelectedStep(num)
  }

  return (
    <div className={"App arp_sequence_step-"+selectedStep+"--selected"}>
      <Keyboard notes={notes} />
      <div>{playedNote.note}</div>
      <Sequence notes={notes} onClick={SelectSequenceStep} />
    </div>
  );
}

export default App;
