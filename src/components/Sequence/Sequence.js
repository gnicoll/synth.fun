import style from './Sequence.css';
import Step from './Step/Step';
import { useSynth } from '../../context/SynthContext';
import { useEffect, useState } from 'react';

const Sequence = () => {
  const { loop, controls, dispatch } = useSynth();
  const [sequenceIndex, setSequenceIndex] = useState(0);

  const handleClick = (sequenceNum) => {
    setSequenceIndex(sequenceNum);
  }
  
  useEffect(() => {
    dispatch({
      'type': 'setSequenceIndex',
      'index': sequenceIndex
    });
  }, [sequenceIndex, dispatch]);
  
  
  return (
    <div className={'arp_sequence' + ' arp_sequence_playing_step_'+controls.patternIndexPlayed}>
      <div>{controls.patternIndexPlayed}</div>
      
      <div className="arp_sequence_grid" >
        {loop.getCurrentSequence()?.map((entry, index) => 
          <Step onClick={()=>handleClick(index)} step={entry} key={index} sequenceNum={index} />
          )}
      </div>
    </div>
  )
}

export default Sequence

// 