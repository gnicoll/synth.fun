import style from './Controls.css';
import { useSynth } from '../../context/SynthContext';

const Controls = () => {
  const { synth, dispatch } = useSynth();

  const handleClick = (play) => {
    dispatch({
      'type': 'playpause',
      play
    });
  }
  
  return (
    <div className="arp_controls" >
      <div 
        onClick={()=>handleClick(true)}
        className='arp_controls_play'>
        Play
      </div>
      <div 
        onClick={()=>handleClick(false)}
        className='arp_controls_pause'>Pause</div>
    </div>
  )
}

export default Controls

// 