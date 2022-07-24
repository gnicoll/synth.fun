import style from './Step.css';


const Step = ({ onClick, step, sequenceNum }) => {
  
  return (
    <div className='arp_sequence_step_container'>
      <div className={"arp_sequence_step_highlight " + "arp_sequence_step-"+sequenceNum}></div>
      <div
        onClick={() => (step!==undefined) && onClick(sequenceNum)}
        className={"arp_sequence_step " + "arp_sequence_step-"+sequenceNum} >
          {step?.rootNote?.name}
          {step?.rootNote === null && '-'}
      </div>
    </div>
  )
}

export default Step

// 