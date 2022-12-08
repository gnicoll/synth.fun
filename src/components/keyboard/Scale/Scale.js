import Note from '../Note/Note';
import style from './Scale.css';


const Scale = ({ keyNote, octaveNumber, onHover, mouseDown }) => {
  //Middle C should be 60
  let octave = (octaveNumber+1);


  const pattern = [0, 3, 5];
  //const startingNote = keys.find((k) => k.name === keyNote.name);
  
  return (
    <div className="arp_keys_scale" >
      {pattern.map((note, i) => 
        <Note />
      )}
    </div>
  )
}

export default Scale

// 