import style from './Pattern.css';
import { useSynth } from '../../context/SynthContext';

const Pattern = () => {
  const { loop, controls, dispatch } = useSynth();
  const handleClick = (PatternNum) => {
  }
  
  return (
    <div className="arp_patterns" >
      <div className='arp_pattern'>
        <div className='arp_pattern_image' >

        </div>
        <div className='arp_pattern_details' >
          {controls.pattern}

        </div>
      </div>
    </div>
  )
}

export default Pattern

// 