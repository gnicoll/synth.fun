import React, { useState } from 'react';
import Octave from './Octave/Octave';
import Scale from './Scale/Scale';
import PropTypes from 'prop-types';
import styles from './Keyboard.css';
import RestKey from './RestKey/RestKey';
import Keybar from './Keybar/Keybar';
import {useSynth} from '../../context/SynthContext';

const Keyboard = () => {
  const [mouseDown , setMouseDown] = useState(false);
  const [mode , setMode] = useState('keys');
  const [octaveNum , setOctaveNum] = useState(3);
  const {controls, loop}  = useSynth();


  const octaves = [1,2,3,4,5,6,7]
  //console.log("render keyboard: "+ playedNote+" " + highlightNote+" "+ notes)
  //hightlight note should be empty if notes 
  //const hnote = notes.filter((n)=>n?.note===highlightNote)?.length ? highlightNote:'';

  const handleOctaveSet = (num) => {
    if (num < 1) {
      setOctaveNum(1);
    } else if (num > octaves.length-1) {
      setOctaveNum(octaves.length-1);
    } else {
      setOctaveNum(num);
    }
  }

  return (
    <>
      <div className={"arp_keys arp_keys--playing_"+controls?.noteNumbersPlayed+" arp_keys_octave-"+octaveNum}>
      <Keybar />
        <div className="arp_keys_octave_up" onClick={()=>handleOctaveSet(octaveNum-1)} ></div>
        <div className="arp_keys_octave_down" onClick={()=>handleOctaveSet(octaveNum+1)}></div>
        <RestKey />
        { controls.mode === 'keys' ? 
        <div className='arp_keys_octave_container'>
          <div 
            className={"arp_keys_octaves "}
            onMouseDown={() => setMouseDown(true)} 
            onMouseUp={() => setMouseDown(false)} 
            >
            {octaves.map((element, index) => 
              <Octave 
                keyNote={controls.key} 
                mouseDown={mouseDown} 
                octaveNumber={(element)} 
                key={element} 
              />
              )}
          </div>
        </div> 
        :  
        <div className='arp_scales_octave_container'>
          <div 
            className={"arp_scales_octaves "}
            onMouseDown={() => setMouseDown(true)} 
            onMouseUp={() => setMouseDown(false)} 
            >
            {octaves.map((element, index) => 
                <Scale 
                  keyNote={controls.key} 
                  octaveNumber={(element)} 
                  key={element} 
                /> 
              )}
          </div>
        </div>   }
      </div>
    </>
  )
}

Keyboard.defaultProps = {
};

Keyboard.propTypes = {
};

export default React.memo(Keyboard);
