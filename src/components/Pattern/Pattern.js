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
          <div>
            UP / Down Arp            
          </div>
          <div>
            Major Scale            
          </div>
          <div>
            {controls.pattern.map((entry, index) =>
              <span key={index}>{entry},</span>
            )}
          </div>

        </div>
      </div>
    </div>
  )
}

export default Pattern

// 