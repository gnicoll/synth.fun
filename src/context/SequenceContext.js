import React, { useReducer, useEffect, useContext } from "react";

const SequenceContext = React.createContext(null);

let sequenceInit = [{'noteNum': 60, 'note':'C4'}];



export function SequenceProvider(props) {
  const [tone, dispatch] = useReducer(synthReducer, {
    sequence:sequenceInit
  });
  const contextValue = {
    sequence:sequenceInit
  };
  return (
    <SequenceContext.Provider value={contextValue}>
      {props.children}
    </SequenceContext.Provider>
  );
}

export default function sequenceReducer(store, action) {
    switch (action.type) {
        case "addNote": {
        const { note, sequenceIndex } = action;
        let newSequence = [...store.sequence];

        if (!sequenceIndex && newSequence.length < 16) {
          newSequence.push(note);
        } else if (sequenceIndex && sequenceIndex < 16) {
          newSequence[sequenceIndex] = note;
        }
        
        return {
          'sequence':newSequence
        };
      }
      default:
        throw new Error("Unhandled action " + action.type);
    }
}

export function useSequence() {
  const context = useContext(SequenceContext);
  if (!context) {
    throw new Error(
      "useSequence must be used within a SequenceContext. Wrap a parent component in <SequenceContext> to fix this error."
    );
  }
  return context;
}
