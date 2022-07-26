import style from './Pattern.css';
import { useSynth } from '../../context/SynthContext';

const Pattern = () => {
  const { loop, controls, dispatch } = useSynth();
  const handleClick = (PatternNum) => {
  }
  
  return (
    <div className="arp_Pattern" >
      {controls.pattern}
    </div>
  )
}

export default Pattern

// 