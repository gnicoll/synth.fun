import style from './Key.css';
import React, { memo, useState } from 'react';
import { useSynth } from '../../../context/SynthContext';
import GenerateClipPath from '../../../Helpers/ClippathHelper';

const Key = ({ note, sharp, noteNumber }) => {
  const {controls, dispatch}  = useSynth();
  const [clipPath, setClipPath] = useState(GenerateClipPath());
  
  function clickHandler(num, n){
    console.log("key click")
    console.log("<- controls.sequenceIndex: ",controls.sequenceIndex)
    dispatch(
      {
        'type': 'playNote', 
        sequenceIndex: controls.sequenceIndex,
        'note': {'number': num, 'name': n}
      });
  }
  
  return (
    <div className={"arp_key " +"arp_key_"+noteNumber+" " + (sharp? "arp_key--sharp":"")} >
      <div 
        className={"arp_key_inner "} 
        onMouseDown={() => clickHandler(noteNumber, note)} 
        style={{'clipPath': clipPath}}
      >
      </div>
    </div>
  )
}
  
const MemoKey = memo(Key);
export default MemoKey;
  