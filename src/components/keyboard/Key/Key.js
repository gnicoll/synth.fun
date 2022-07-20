import style from './Key.css';
import { useSynth } from '../../../context/SynthContext';
import { useSequence } from '../../../context/SequenceContext';

const Key = ({ note, sharp, noteNumber, onHover, mouseDown }) => {
  const synthDispatch  = useSynth().dispatch;
  const sequenceDispatch = useSequence().dispatch;
  
    function clickHandler(num, n){
      synthDispatch({'type': 'play', 'note': {'number': num, 'note': n}});
      sequenceDispatch({'type': 'addNote', 'note': {'number': num, 'name': n}});
    }
    function hoverHandler(num, n){
      if (onHover)
        onHover(num, n)
      if (mouseDown)
        clickHandler(num, n)
    }


    return (
      <div className={"arp_key " +"arp_key_"+noteNumber+" " + (sharp? "arp_key--sharp":"")} >
        <div 
          className={"arp_key_inner "} 
          onMouseDown={() => clickHandler(noteNumber, note)} 
          onMouseEnter={() => hoverHandler(noteNumber, note)}
          onMouseLeave={() => hoverHandler(undefined, undefined)} 
        >
        </div>
      </div>
    )
}
  
  export default Key
  