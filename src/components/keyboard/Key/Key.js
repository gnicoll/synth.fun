import style from './Key.css';
import { useSynth } from '../../../context/SynthContext';

const Key = ({ note, sharp, noteNumber, onHover, mouseDown }) => {
    const { dispatch } = useSynth();
  
    function clickHandler(num, n){
      dispatch({'type': 'play', 'note': {'number': num, 'note': n}});
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
  