import style from './Pattern.css';
import { useSynth } from '../../context/SynthContext';
import { useEffect, useState } from 'react';
import {getPattern, getMappedPattern } from '../../Helpers/PatternHelper';
import Slider from './Slider/Slider';

const Pattern = () => {
  const { loop, controls, dispatch } = useSynth();
  const handleClick = (PatternNum) => {
  }
  const chordSliderMax = 4;
  const fillSliderMax = 4;

  const setChordSlider = (p) => {
    let value = p/chordSliderMax * 100;
    dispatch({
      'type': 'chordSlider',
      value
    });
  }
  const setFillSlider = (p) => {
    let value = p/fillSliderMax * 100;
    dispatch({
      'type': 'fillSlider',
      value
    });
  }

  const pattern = getPattern(controls.pattern);
  console.log(loop.chordSlider)
  return (
    <div className="arp_patterns" >
      <div className='arp_pattern'>
        <div className={'arp_pattern_patternvisual'}>
          <div className='arp_pattern_patternvisual_entries'>
            {getMappedPattern(getPattern(controls?.pattern), controls.patternMap, loop.fillSlider).map((entry, index) => 
            {
              //let entry = index > 0 ? pattern[index - 1] : pattern[controls.pattern.length-1];
              //let entry = controls.patternMap[index] > loop.fillSlider ? controls.pattern[0] : e;
              let l = entry ? (100 * (Math.max(...pattern) - entry)) / ((Math.max(...pattern) - Math.min(...pattern) +1)) : 100;
              if ( controls.patternMap[index] > loop.fillSlider ) 
              return <div 
                        className={'arp_pattern_patternvisual_entry'}             
                        style = {
                          {
                            'clipPath': 'polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)',
                          }
                        } 
                        key={index}>
                      <div 
                          className={'arp_pattern_patternvisual_entry_column'}             
                          style = {
                            {
                            }
                          } 
                          key={index}>
                      </div>
                    </div>;
              //let r = (100 * (Math.max(...controls.pattern) - (entry.step+(entry.transpose*12)))) / ((Math.max(...controls.pattern) - Math.min(...controls.pattern) +1));
              return <div 
                        className=
                          {
                            'arp_pattern_patternvisual_entry ' +
                            (controls.patternMap[index] < loop.chordSlider ? 'arp_pattern_patternvisual_entry--chord': '')
                          }             
                        style = {
                          {
                            'clipPath': 'polygon(0 '+l+'%, 100% '+l+'%, 100% 100%, 0% 100%)',
                          }
                        } 
                        key={index}>
                      <div 
                          className={'arp_pattern_patternvisual_entry_column'}             
                          style = {
                            {
                            }
                          } 
                          key={index}>
                      </div>
                    </div>
            }
            )}
          </div>
        </div>
        <Slider callback={setFillSlider} maxValue={fillSliderMax} />
        <Slider callback={setChordSlider} maxValue={chordSliderMax} />
      </div>
    </div>
  )
}

export default Pattern

// 