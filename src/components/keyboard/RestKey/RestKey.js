import style from './RestKey.css';
import React, { memo, useState } from 'react';
import { useSynth } from '../../../context/SynthContext';
import {GenerateClipPath} from '../../../Helpers/ClippathHelper';


const RestKey = ({ note, noteNumber}) => {
  const {controls, dispatch}  = useSynth();
  const [clipPath, setClipPath] = useState(GenerateClipPath());
  
  function clickHandler(){
    dispatch(
      {
        'type': 'playNote', 
        sequenceIndex: controls.sequenceIndex,
        'note': null
      });
  }

  return null;
  return (
    <div 
      onMouseDown={() => clickHandler()} 
      className="arp_keys_rest" 
      style={{'clipPath': clipPath}}
    >
    </div>
  )
}
  
const MemoRestKey = memo(RestKey);
export default MemoRestKey;
  
  