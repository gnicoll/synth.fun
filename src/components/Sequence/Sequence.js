import style from './Sequence.css';
import Step from './Step/Step';
import { useSequence } from '../../context/SequenceContext';

const Sequence = () => {
  const { sequence, dispatch } = useSequence();

  const handleClick = (sequenceNum) => {
    dispatch({
      'type': 'setIndex',
      'index': sequenceNum
    });
  }
  
  return (
    <div className="arp_sequence" >
      {sequence.sequence?.map((entry, index) => 
        <Step onClick={()=>handleClick(index)} note={entry} key={index} sequenceNum={index} />
      )}
    </div>
  )
}

export default Sequence

// 