import style from './Step.css';
import React, { memo, useState } from 'react';
import GenerateClipPath from '../../../Helpers/ClippathHelper';

const Step = ({ onClick, step, sequenceNum }) => {
  const [clipPath, setClipPath] = useState(GenerateClipPath());
  
  return (
    <div className='arp_sequence_step_container'>
      <div className={"arp_sequence_step_highlight " + "arp_sequence_step-"+sequenceNum}></div>
      <div
        onClick={() => (step!==undefined) && onClick(sequenceNum)}
        className={"arp_sequence_step " + "arp_sequence_step-"+sequenceNum} 
        style={{'clipPath': clipPath}}
        >
          {step?.rootNote?.name}
          {step?.rootNote === null && '-'}
      </div>
    </div>
  )
}


const MemoStep = memo(Step);
export default MemoStep;
// 