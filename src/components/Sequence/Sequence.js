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
    <div className={'arp_sequence'}>   
    <div className='arp_sequence_grids'>
      <div className='arp_sequence_grid_container'>
        <div className="arp_sequence_grid" >
          {loop.getCurrentSequence()?.map((entry, index) => 
            <Step onClick={()=>handleClick(index)} step={entry} key={index} sequenceNum={index} />
            )}
        </div>
      </div>  
      </div>  
    </div>
  )
}

export default Sequence

// 