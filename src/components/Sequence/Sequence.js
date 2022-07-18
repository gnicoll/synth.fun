import style from './Sequence.css';
import Step from './Step/Step';


const Sequence = ({ onClick, notes }) => {
  
  return (
    <div className="arp_sequence" >
      {notes.map((note, index) => 
        <Step onClick={onClick} note={note} key={index} sequenceNum={index} />
      )}
    </div>
  )
}

export default Sequence

// 