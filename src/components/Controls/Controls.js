import style from './Controls.css';
import { useState } from 'react';
import { useSynth } from '../../context/SynthContext';

const Controls = () => {
  const { synth, dispatch } = useSynth();
  const [play, setPlay] = useState(false);

  const handleClick = (p) => {
    setPlay(p)
    dispatch({
      'type': 'playpause',
      'play': p
    });
  }
  
  return (
    <div className="arp_controls" >
      <div className='arp_control_button'
        onClick={()=>handleClick(!play)}
      >
        {!play && <div 
          className='arp_control_button_play'>
        </div>}
        {play && <div 
          className='arp_control_button_pause'>
        </div>}
      </div>
    </div>
  )
}

export default Controls

// 