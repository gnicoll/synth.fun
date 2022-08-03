import style from './Pattern.css';
import { useSynth } from '../../context/SynthContext';
import { useEffect, useState } from 'react';

const Pattern = () => {
  const { loop, controls, dispatch } = useSynth();
  const handleClick = (PatternNum) => {
  }

  
  return (
    <div className="arp_patterns" >
      <div className='arp_pattern'>
        <div className={'arp_pattern_patternvisual'}>
          <div className='arp_pattern_patternvisual_entries'>
            {controls?.pattern?.map((entry, index) => 
            {
              //(patternMax - entry) 100(patternMax - patternMin) 
              if (index === 0) return;
              let prevEntry = index > 0 ? controls.pattern[index - 1] : controls.pattern[controls.pattern.length-1];
              let l = (100 * (Math.max(...controls.pattern) - prevEntry)) / ((Math.max(...controls.pattern) - Math.min(...controls.pattern) +1));
              let r = (100 * (Math.max(...controls.pattern) - entry)) / ((Math.max(...controls.pattern) - Math.min(...controls.pattern) +1));
              return <div 
                      className={'arp_pattern_patternvisual_entry'}             
                      style = {
                        {
                          'clipPath': 'polygon(0 '+l+'%, 100% '+r+'%, 100% 100%, 0% 100%)',
                        }
                      } 
                      key={index}>
                    </div>
            }
            )}
          </div>
          <div>
            {controls?.pattern?.map((entry, index) => 
            {
              return <div 
                      className={'arp_pattern_patternvisual_entry_column'}             
                      style = {
                        {
                          left: (100 / (controls.pattern.length-1)) * index + '%',
                        }
                      } 
                      key={index}>
                        <div></div>
                    </div>
            }
            )}
          </div>
        </div>
        <div className='arp_pattern_details' >
          <div>
            UP / Down Arp            
          </div>
          <div>
            Major Scale            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pattern

// 