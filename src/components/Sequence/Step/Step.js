import style from './Step.css';
import React, { memo, useState, useEffect } from 'react';
import {GenerateClipPath, GeneratePatternClipPath } from '../../../Helpers/ClippathHelper';

const Step = ({ onClick, step, sequenceNum }) => {
  const [clipPath, setClipPath] = useState(GenerateClipPath());
  const [patternClipPath, setPatternClipPath] = useState(GeneratePatternClipPath(step?.getPattern()));
  

  useEffect(() => {
    setPatternClipPath(GeneratePatternClipPath(step?.getPattern()));
  }, [step, setPatternClipPath]);

  return (
    <div className='arp_sequence_step_container'>
      <div className={"arp_sequence_step_highlight " + "arp_sequence_step-"+sequenceNum}></div>
      <div
        onClick={() => (step!==undefined) && onClick(sequenceNum)}
        className={"arp_sequence_step " + "arp_sequence_step-"+sequenceNum} 
        style={{'clipPath': clipPath}}
        >
          <div className='arp_sequence_step_note'>
            {step?.rootNote?.name}
            {step?.rootNote === null && '-'}
          </div>
          <div 
            className={'arp_sequence_step_pattern'+ ' arp_sequence_step_pattern_length'+step?.getPattern().length}
            style={{'clipPath': patternClipPath}}
            ></div>
      </div>
    </div>
  )
}


const MemoStep = memo(Step);
export default MemoStep;
// 