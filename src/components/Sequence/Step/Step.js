import style from './Step.css';


const Step = ({stepNum,  onClick, note, sequenceNum }) => {
  
  return (
    <div
     onClick={() => onClick(sequenceNum)}
     className={"arp_sequence_step " + "arp_sequence_step-"+sequenceNum} >
        {note?.note}
    </div>
  )
}

export default Step

// 