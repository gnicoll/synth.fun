import Note from './Note/Note';
import style from './Scale.css';
import scales from '../../../data/scales';
import { useSynth } from '../../../context/SynthContext';

const Scale = ({ keyNote, octaveNumber, onHover, mouseDown }) => {
  const {controls, loop}  = useSynth();

  //Middle C should be 60
  let octave = (octaveNumber+1);
  const keys = [
    {name: 'C',  octave: octave, number: 0},
    {name: 'C#', octave: octave, number: 1},
    {name: 'D',  octave: octave, number: 2},
    {name: 'D#', octave: octave, number: 3},
    {name: 'E',  octave: octave, number: 4},
    {name: 'F',  octave: octave, number: 5},
    {name: 'F#', octave: octave, number: 6},
    {name: 'G',  octave: octave, number: 7},
    {name: 'G#', octave: octave, number: 8},
    {name: 'A',  octave: octave, number: 9},
    {name: 'A#', octave: octave, number: 10},
    {name: 'B',  octave: octave, number: 11},
  ];

  const startingNote = keys.find((k) => k.name === keyNote.name);
  

  const scale = scales[loop.scale]?.scale;
  //const startingNote = keys.find((k) => k.name === keyNote.name);
  
  return (
    <div className="arp_keys_scale" >
      {scale?.map((entry, index) => {
        
        let noteIndex = (index + startingNote.number);
        if (noteIndex > (scale.length-1)) { noteIndex = noteIndex - scale.length; }
        return  <Note 
                  key={entry}
                  scaleNum={index+1}
                  mouseDown={mouseDown} 
                  noteNumber={startingNote.number+ entry +((octaveNumber-1)*12)} 
                  sharp = {keys[noteIndex].name.indexOf('#') > -1}
                  note={
                    ( keys[noteIndex].name + octaveNumber
                    )
                    } 
                />
      }
      )}
    </div>
  )
}

export default Scale

// 