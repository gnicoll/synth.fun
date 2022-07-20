import style from './RestKey.css';
import { useSequence } from '../../../context/SequenceContext';

const RestKey = ({ note, sharp, noteNumber, onHover, mouseDown }) => {
  const sequenceDispatch = useSequence().dispatch;
  
    function clickHandler(num, n){
      sequenceDispatch({'type': 'addNote', 'note': null});
    }

    return (
      <div 
        onMouseDown={() => clickHandler(noteNumber, note)} 
        className="arp_keys_rest" 
      >
      </div>
    )
}
  
  export default RestKey
  