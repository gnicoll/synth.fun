import style from './Key.css';
import { useSynth } from '../../../context/SynthContext';

const Key = ({ note, sharp, noteNumber }) => {
  const {controls, dispatch}  = useSynth();
  
  function clickHandler(num, n){
    console.log("key click")
    console.log("<- controls.sequenceIndex: ",controls.sequenceIndex)
    dispatch(
      {
        'type': 'playNote', 
        sequenceIndex: controls.sequenceIndex,
        'note': {'number': num, 'name': n}
      });
  }
  
  return (
    <div className={"arp_key " +"arp_key_"+noteNumber+" " + (sharp? "arp_key--sharp":"")} >
      <div 
        className={"arp_key_inner "} 
        onMouseDown={() => clickHandler(noteNumber, note)} 
      >
      </div>
    </div>
  )
}
  
  export default Key
  