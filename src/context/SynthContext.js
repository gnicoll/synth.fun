import React, { useReducer, useEffect, useContext } from "react";
import * as Tone from 'tone';

const SynthContext = React.createContext(null);

let synthInit = 
    new Tone.MonoSynth({
   oscillator: {
     type: "square"
   },
   envelope: {
     attack: 0.1
   }
 }).toDestination();

let transportInit = Tone.Transport;

let toneInit = Tone;



export function SynthProvider(props) {
  toneInit.start();
  const [tone, dispatch] = useReducer(synthReducer, {
    tone:toneInit
  });
  const contextValue = {
    tone,
    dispatch,
  };
  return (
    <SynthContext.Provider value={contextValue}>
      {props.children}
    </SynthContext.Provider>
  );
}

export default function synthReducer(store, action) {
    switch (action.type) {
        case "play": {
        //store.tone.start();
        const { note } = action;

        let ns = new store.tone.MonoSynth({
        oscillator: {
            type: "square"
        },
        envelope: {
            attack: 0.1
        }
        }).toDestination();

        //ns.sync();
        //schedule 3 notes when the transport first starts
        ns.triggerAttackRelease(note.note, "8n");
        //start the transport to hear the notes
        //store.transport.start();
        return store;
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
