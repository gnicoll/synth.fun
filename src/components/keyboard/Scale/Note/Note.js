import style from './Note.css';
import React, { memo, useState } from 'react';
import { useSynth } from '../../../../context/SynthContext';
import {GenerateClipPath} from '../../../../Helpers/ClippathHelper';
import {isNoteInScale} from '../../../../Helpers/PatternHelper';

const Note = ({ note, sharp, noteNumber,scaleNum }) => {
  const {controls, dispatch}  = useSynth();
  const [clipPath, setClipPath] = useState(GenerateClipPath());
  
  function clickHandler(num, n){
    dispatch(
      {
        'type': 'playNote', 
        sequenceIndex: controls.sequenceIndex,
        'note': {'number': num, 'name': n}
      });
  }
  
  return (
    <div 
      className= {
        "arp_note " +
        "arp_note_"+noteNumber+" " + 
        (sharp? "arp_note--sharp ":"") +
        (!isNoteInScale(controls.key.noteNum, controls.scale, noteNumber)? "arp_note--notinscale":"")
      }>
      <div 
        className={"arp_note_inner "} 
        onMouseDown={() => clickHandler(noteNumber, note)} 
        style={{'clipPath': clipPath}}
      >
        {noteNumber}<br/>
        {scaleNum}
      </div>
    </div>
  )
}
  
const MemoNote = memo(Note);
export default MemoNote;
  