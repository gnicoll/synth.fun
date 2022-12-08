import style from './Keybar.css';
import { useState } from 'react';
import { useSynth } from '../../../context/SynthContext';

const Keybar = () => {
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
    <div className="arp_keybar" >
      <div className="arp_keybar_container">
        <div className='arp_keybar_button'
          onClick={()=>handleClick(!play)}
          >
          {!play && 
          <div className='arp_keybar_button_play'>
          </div>}
          {play && 
          <div className='arp_keybar_button_pause'>
          </div>}
        </div>
      </div>
    </div>
  )
}

export default Keybar

// 