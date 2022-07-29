import React, { useReducer, useEffect, useContext } from "react";
import * as Tone from 'tone';
import Loop from '../classes/Loop';
import Step from "../classes/Step";
import noteMap from "../noteMap";

//used to hold the selected Synths
console.log('initializing SynthContext')
const SynthContext = React.createContext(null);

document.documentElement.addEventListener('mousedown', () => {
  if (Tone.context.state !== 'running') Tone.context.resume();
});

let toneInit = Tone;


let effect = new Tone.FeedbackDelay(0.1, 0.4); 

let synthInit = 
    new toneInit.MonoSynth(
      {
        frequency : 'C4',
        detune : 0,
        oscillator : {
          type : 'square'
          },
        filter : {
          Q : 1 ,
          type : 'lowpass' ,
          frequency : 550 ,
          rolloff : -24
        },
        envelope : {
          attack : 0.001,
          decay : 0.1,
          sustain : 0.9,
          release : .45
        },
        filterEnvelope : {
          attack : 0.001,
          decay : 0.1,
          sustain : 0.5,
          release : .25,
          baseFrequency : 200,
          octaves : 7,
          exponent : 2
        }
      }
    );

const gain = new toneInit.Gain(0.6);
gain.toDestination();
synthInit.connect(effect);
effect.connect(gain);
const loop = new Loop(false, synthInit);

//routing synth through the reverb



//controls is the interface object
let controls = {
  'mode': 'sequence',
  'sequenceIndex': 0,
//  'pattern': [0,4,7,11,7,4],
  'pattern': [0,11,7,4,11,4,7],
  'tempo': 120,
  'gain': 0.6,
  'notesPlayed': null,
  'patternIndexPlayed': null,
}

toneInit.Transport.scheduleRepeat(repeat, '8n');
//toneInit.Transport.start();

function repeat(time) {
  //where should i put playDetails that the app can get it?? it should go into controls
  let playDetails = loop.play();
//  controls.notesPlayed = playDetails.noteNumber;
  if (playDetails.noteNumber !== undefined) {
    synthInit.triggerAttackRelease(noteMap[playDetails.noteNumber], '8n', time);
  }
}



export function SynthProvider(props) {
  toneInit.start();
  const [tone, dispatch] = useReducer(synthReducer, {
    tone:toneInit,
    controls,
    loop
  });
  loop.dispatch = dispatch;

  const contextValue = {
    tone,
    loop,
    controls,
    dispatch,
  };
  return (
    <SynthContext.Provider value={contextValue}>
      {props.children}
    </SynthContext.Provider>
  );
}

function sequenceNext(sequence){
  for (let i = 0; i < sequence.length; i++) {
    if (sequence[i] === undefined) {
      return i;
    }
  }
  return sequence.length;
}

export default function synthReducer(store, action) {
    switch (action.type) {
      case "playNote": {
        const { note, sequenceIndex } = action;
        
        let synth = new Tone.Synth().toDestination();
        synth.triggerAttackRelease(`${note.name}`, "8n");
        if (store.controls.mode === 'sequence') {
          //below pattern should come from current step selection
          //let step = new Step( note, [0,3,7,11,7,3] );
          let step = new Step( note, store.controls.pattern );

          store.loop.addStepToSequence(step, sequenceIndex);
          store.controls.sequenceIndex = sequenceNext(loop.getCurrentSequence());
        } else if (store.controls.mode === 'live') {
          
          //loop.synth.triggerAttackRelease(noteMap[playDetails.noteNumber], '4n', time);
        }
        return {
          tone: store.tone,
          loop: store.loop,
          controls: store.controls
        };
      }


      case "playpause": {
        //store.tone.start();
        const { play } = action;

        if (play) 
        store.tone.Transport.start();
        else
        store.tone.Transport.stop();

        return {
          tone: store.tone,
          loop: store.loop,
          controls: store.controls
        };
      }

      case 'setSequenceIndex' : {
        const { index } = action;
        
        store.controls.sequenceIndex = index;

        return {
          tone: store.tone,
          loop: store.loop,
          controls: store.controls
        };
      }

      case 'setPlayDetails' : {
        const { playDetails } = action;
        const { noteNumber, sequenceIndex, pattern, patternIndex } = playDetails;

        store.controls.notesPlayed = noteMap[noteNumber];
        store.controls.noteNumberPlayed = noteNumber;
        store.controls.patternIndexPlayed = sequenceIndex;
        store.controls.pattern = pattern;
        store.controls.patternIndex = patternIndex;
        
        return {
          tone: store.tone,
          loop: store.loop,
          controls: store.controls
        };
      }

      default:
        throw new Error("Unhandled action " + action.type);
    }
}

export function useSynth() {
  const context = useContext(SynthContext);
  if (!context) {
    throw new Error(
      "useSynth must be used within a SynthContext. Wrap a parent component in <SynthContext> to fix this error."
    );
  }
  return context;
}
