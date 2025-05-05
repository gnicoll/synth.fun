import React, { useReducer, useContext } from "react";

//used to hold the Ui
const UiContext = React.createContext(null);

export function UiProvider(props) {
  const [ui, dispatch] = useReducer(uiReducer, {
    screen: 'default',
  });
  const contextValue = {
    ui,
    dispatch
  };


  return (
    <UiContext.Provider value={contextValue}>
      {props.children}
    </UiContext.Provider>
  );
}

export default function uiReducer(store, action) {
  const { dispatch } = action;
  switch (action.type) {
    case "screen": {
      
      
      return {
        ...store,
        screen: action.value,
        dispatch
      };
    }
    default:
      throw new Error("Unhandled action " + action.type);
  }
}


export function useUi() {
  const {ui, dispatch} = useContext(UiContext);


  const uiProxy = new Proxy(
  {
    ...ui,
  },
  {
    get(obj, prop) {
      // The default behavior to return the value
      return obj[prop];
    },
    set(obj, prop, value) {
      // The default behavior to store the value
      obj[prop] = value;
      dispatch({
          'type': 'screen',
          value,
          dispatch,
      });

      // Indicate success
      return true;
    },
  },
);


  if (!ui) {
    throw new Error(
      "useSynth must be used within a UIContext. Wrap a parent component in <UIContext> to fix this error."
    );
  }
  return uiProxy;
}
