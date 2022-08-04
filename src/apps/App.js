import logo from './logo.svg';
import React, { useEffect, useCallback, useRef  } from 'react';
import './App.css';
import { ReactSVG } from 'react-svg'
import Keyboard from '../components/keyboard/Keyboard';
import Sequence from '../components/Sequence/Sequence';
import Pattern from '../components/Pattern/Pattern';
import Controls from '../components/Controls/Controls';
import * as Tone from 'tone';
import { useSynth } from '../context/SynthContext';
import Layout from '../Layout/Layout';

function App() {
  console.log("Rendered App.js")
  const {controls} = useSynth();

  return (
    <div className={"App arp_sequence_step-"+controls.sequenceIndex+"--selected"+ ' arp_pattern_patternvisual_playingentry'+controls.patternIndex+ ' arp_sequence_playing_step_'+controls.patternIndexPlayed}>
      <Layout>
        <Keyboard />
        <Pattern />
        <Sequence />
        <Controls />
      </Layout>
    </div>
  );
}

export default App;
