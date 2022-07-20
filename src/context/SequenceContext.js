import React, { useReducer, useEffect, useContext } from "react";

const SequenceContext = React.createContext(null);

let sequenceInit = 
[
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined
];



export function SequenceProvider(props) {
  const [sequence, dispatch] = useReducer(sequenceReducer, {
    sequence:sequenceInit,
    sequenceIndex:0
  });
  const contextValue = {
    sequence,
    dispatch
  };
  return (
    <SequenceContext.Provider value={contextValue}>
      {props.children}
    </SequenceContext.Provider>
  );
}

function nextSequenceIndex(sequence) {
  for (let i = 0; i < sequence.length; i++) {
    if (sequence[i] === undefined) {
      return i;
    }
  }
  return sequence.length;
}

export default function sequenceReducer(store, action) {
  const { note, index } = action;
    switch (action.type) {
        case "addNote": {
        let newSequence = [...store.sequence];

        if (!index && store.sequenceIndex < newSequence.length) {
          newSequence[store.sequenceIndex] = note;
        } else if (index && index < newSequence.length) {
          newSequence[index] = note;
        }
        
        return {
          'sequence':newSequence,
          'sequenceIndex':nextSequenceIndex(newSequence)
        };
      }
      case "setIndex": {
        return {
          'sequence':store.sequence,
          'sequenceIndex':index
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
