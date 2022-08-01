import style from './RestKey.css';
import { useSynth } from '../../../context/SynthContext';
import GenerateClipPath from '../../../Helpers/ClippathHelper';


const RestKey = ({ note, noteNumber}) => {
  
  const {controls, dispatch}  = useSynth();
  
  function clickHandler(){
    dispatch(
      {
        'type': 'playNote', 
        sequenceIndex: controls.sequenceIndex,
        'note': null
      });
  }

  return (
    <div 
      onMouseDown={() => clickHandler()} 
      className="arp_keys_rest" 
    >
    </div>
  )
}
  
  export default RestKey
  