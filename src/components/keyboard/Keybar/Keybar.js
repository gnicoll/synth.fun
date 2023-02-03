import style from './Keybar.css';
import { useState } from 'react';
import { useSynth } from '../../../context/SynthContext';

const Keybar = () => {
  const { synth, controls, dispatch } = useSynth();
  const [mode, setMode] = useState(controls.mode);

  const handleClick = (m) => {
    let value = m === 'keys' ? 'scales' : 'keys';
    setMode(m)
    dispatch({
      'type': 'mode',
      'mode': value
    });
  }
  
  return (
    <div className="arp_keybar" >
      <div className="arp_keybar_container">
        <div className='arp_keybar_button'
          onClick={()=>handleClick(mode)}
          >
          <div className='arp_keybar_button_play'></div>
        </div>
        <div className='arp_keybar_button'
          onClick={()=>handleClick(mode)}
          >
          <div className='arp_keybar_button_play'></div>
        </div>
      </div>
    </div>
  )
}

export default Keybar

// 