import React, { useReducer, useEffect, useContext } from "react";
import * as Tone from 'tone';
import Loop from '../classes/Loop';
import Step from "../classes/Step";
import noteMap from "../data/noteMap";
import choosePattern from '../data/patterns';
import {get16Pattern, getChordTypeForNoteInScale, getPatternMap} from '../Helpers/PatternHelper';

//used to hold the selected Synths
const SynthContext = React.createContext(null);

document.documentElement.addEventListener('mousedown', () => {
  if (Tone.context.state !== 'running') Tone.context.resume();
});

let toneInit = Tone;


let effect = new toneInit.FeedbackDelay(0.2, 0.4); 

let synthVoice = 
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


/*let synthInit = new Tone.PolySynth({
	"volume": 0,
	"detune": 0,
	"portamento": 0,
	"envelope": {
		"attack": 0.01,
		"attackCurve": "exponential",
		"decay": 0.1,
		"decayCurve": "exponential",
		"release": 0.4,
		"releaseCurve": "exponential",
		"sustain": 0.5
	},
	"oscillator": {
		"partialCount": 0,
		"partials": [],
		"phase": 0,
		"type": "fatsawtooth",
		"count": 3,
		"spread": 30
	}
});*/
let synthInit = new toneInit.PolySynth(toneInit.Synth, {
  oscillator: {
    type: "fatsawtooth",
    count: 3,
    spread: 30
  },
  envelope: {
    attack: 0.01,
    decay: 0.1,
    sustain: 0.5,
    release: 0.4,
    attackCurve: "exponential"
  },
}).toDestination();

const vol = new toneInit.Volume(0).toDestination();
//synthInit.connect(effect);
//effect.connect(vol);
synthInit.connect(vol);
//const pattern = patterns[Object.keys(patterns)[Math.round(Math.random() * (Object.keys(patterns).length-1))]];
const pattern = choosePattern();
const patternFullLength = get16Pattern(pattern);
//routing synth through the reverb
toneInit.setContext(new toneInit.Context({ latencyHint : "playback" }))

//controls is the interface object
let controls = {
  'key': {
    'name': 'C',
    'noteNum': 24
  },
  'scale': 'major',
  'mode': 'sequence',
  'sequenceIndex': 0,
  'pattern': patternFullLength,
  'patterLength': pattern.length,
  'patternMap': getPatternMap(patternFullLength),
  'tempo': 94,
  'gain': 0.6,
  'notesPlayed': null,
  'patternIndexPlayed': null,
}

const loop = new Loop(false, synthInit, controls.key.noteNum, controls.scale,  patternFullLength);

toneInit.Transport.bpm.value = 96;
toneInit.Transport.swing=0.22;
Tone.Transport.swingSubdivision = "16n"
toneInit.Transport.scheduleRepeat(repeat, '16n');
//toneInit.Transport.start();

function repeat(time) {
  //where should i put playDetails that the app can get it?? it should go into controls
  let playDetails = loop.play();
//  controls.notesPlayed = playDetails.noteNumber;
if (playDetails.noteNumbers) {
  let notes = playDetails.noteNumbers.map((n)=>noteMap[n]);
    synthInit.triggerAttackRelease(notes, '16n', time);
  }
}



export function SynthProvider(props) {
  toneInit.start("+0.1");
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
        
        if (note) {
          let synth = new Tone.Synth().toDestination();
          synth.triggerAttackRelease(`${note.name}`, "8n");
        }
        if (store.controls.mode === 'sequence') {
          //below pattern should come from current step selection
          // pattern should be transposed to the current sequence key
          
          let step = new Step( 
            note, 
            store.controls.pattern 
            );

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


      case "fillSlider": {
        //store.tone.start();
        const { value } = action;
        store.loop.fillSlider = value;

        return {
          tone: store.tone,
          loop: store.loop,
          controls: store.controls
        };
      }

      case "chordSlider": {
        //store.tone.start();
        const { value } = action;
        store.loop.chordSlider = value;

        return {
          tone: store.tone,
          loop: store.loop,
          controls: store.controls
        };
      }

      case "lengthSlider": {
        //store.tone.start();
        const { value } = action;
        store.loop.lengthSlider = value;
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
        store.tone.Transport.start("+0.1");
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
        const { noteNumbers, sequenceIndex, pattern, patternIndex } = playDetails;

        store.controls.notesPlayed = noteNumbers ? noteNumbers.map((n)=> noteMap[n[0]]): [];
        store.controls.noteNumbersPlayed = noteNumbers;
        store.controls.patternIndexPlayed = sequenceIndex;
        //store.controls.pattern = pattern;
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
