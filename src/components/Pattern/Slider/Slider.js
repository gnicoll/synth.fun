import style from './Slider.css';
import React, { useState } from 'react';

const Slider = ({ className, callback, maxValue, initValue, minValue }) => {
  const [value, setValue] = useState(initValue || 0);
  const onChange = (value) => {
    if ((minValue && value > minValue) || !minValue) {
      setValue(value);
      callback(value);
      return;
    }
    setValue(minValue);
    callback(minValue);
  }

  const MAX = maxValue;

  return (
    <div className={"arp_pattern_patternvisual_slider_container "+className} >
      <input
        className={'arp_pattern_patternvisual_slider '+className}
        type="range"
        min="0"
        max={MAX}
        onChange={(e) => { 
          onChange(e.target.value);
        }}
        value={value}
      />
    </div>
  )
}
  
export default Slider;
  