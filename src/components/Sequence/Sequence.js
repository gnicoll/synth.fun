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
  
  console.log(loop.getSequences())
  return (
    <div className={'arp_sequence'}>   
    <div className='arp_sequence_grids'>
      <div className='arp_sequence_grid_container'>
          {loop.getSequences()?.map((sequence, sIndex) => 
            <div className="arp_sequence_grid" >
            {sequence.steps?.map((step, index) => 
              <Step onClick={()=>handleClick(index)} step={step} key={index} sequenceNum={index} />
            )}
              {loop.sequenceIndex === sIndex && <div className='arp_sequence_switcher'></div>}
              
            </div>
          )}
      </div>  
      </div>  
    </div>
  )
}

export default Sequence

// 