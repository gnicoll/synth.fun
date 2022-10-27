import style from './Slider.css';
import React, { useState } from 'react';

const Slider = ({ note, sharp, noteNumber }) => {
  const [value, setValue] = useState(0);
  const MAX = 15;
  
  return (
    <div className="arp_pattern_patternvisual_slider_container" >
      <input
        className='arp_pattern_patternvisual_slider'
        type="range"
        min="0"
        max={MAX}
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
    </div>
  )
}
  
export default Slider;
  