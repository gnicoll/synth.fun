import logo from './logo.svg';
import React, { useEffect, useCallback, useRef  } from 'react';
import './App.css';
import Keyboard from '../components/keyboard/Keyboard';
import Controls from '../components/Controls/Controls';
import ScreenController from '../components/ScreenController/ScreenController';
import { useSynth } from '../context/SynthContext';
import Layout from '../Layout/Layout';

function App() {
  const {controls} = useSynth();

  return (
    <div 
      className={
        "App arp_sequence_step-"+controls.sequenceIndex+"--selected" + 
        ' arp_pattern_patternvisual_playingentry'+controls.patternIndex + 
        ' arp_sequence_playing_step_'+controls.patternIndexPlayed +
        ' mode_'+controls.mode
      }>
      <Layout>
        <Keyboard />
        <ScreenController />
        <Controls />
      </Layout>
    </div>
  );
}

export default App;
