import logo from './logo.svg';
import React, { useEffect, useCallback, useRef  } from 'react';
import './App.css';
import { ReactSVG } from 'react-svg'
import Keyboard from '../components/keyboard/Keyboard';
import Sequence from '../components/Sequence/Sequence';
import * as Tone from 'tone';
import { useSequence } from '../context/SequenceContext';

function App() {
  console.log("Rendered App.js")
  const {sequence} = useSequence();

  return (
    <div className={"App arp_sequence_step-"+sequence.sequenceIndex+"--selected"}>
      <Keyboard />
      <Sequence />
    </div>
  );
}

export default App;
