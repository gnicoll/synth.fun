import Key from '../Key/Key';
import style from './Octave.css';


const Octave = ({ keyNote, octaveNumber, onHover, mouseDown }) => {
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

  const startingNote = keys[0];
  //const startingNote = keys.find((k) => k.name === keyNote.name);
  
  return (
    <div className="arp_keys_octave" >
      {keys.map((k, i) => 
        {
        let noteIndex = (i + startingNote.number);
        if (noteIndex > 11) { noteIndex = noteIndex - 12; }
        return <Key 
        key={keys[noteIndex].name + octaveNumber}
        mouseDown={mouseDown} 
        onHover={onHover} 
        noteNumber={keys[noteIndex].number +((octave)*12)} 
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

export default Octave

// 