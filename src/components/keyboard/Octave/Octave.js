import Key from '../Key/Key';
import style from './Octave.css';


const Octave = ({ octaveNumber, onHover, mouseDown }) => {
  //Middle C should be 60
  let octave = (octaveNumber+1);

  return (
    <div className="arp_keys_octave" >
      <Key mouseDown={mouseDown} onHover={onHover} noteNumber={0 +((octave)*12)} note={"C"+octaveNumber} />
      <Key mouseDown={mouseDown} onHover={onHover} noteNumber={1 +((octave)*12)} note={"C#"+octaveNumber} sharp />
      <Key mouseDown={mouseDown} onHover={onHover} noteNumber={2 +((octave)*12)} note={"D"+octaveNumber} />
      <Key mouseDown={mouseDown} onHover={onHover} noteNumber={3 +((octave)*12)} note={"D#"+octaveNumber} sharp />
      <Key mouseDown={mouseDown} onHover={onHover} noteNumber={4 +((octave)*12)} note={"E"+octaveNumber} />
      <Key mouseDown={mouseDown} onHover={onHover} noteNumber={5 +((octave)*12)} note={"F"+octaveNumber} />
      <Key mouseDown={mouseDown} onHover={onHover} noteNumber={6 +((octave)*12)} note={"F#"+octaveNumber} sharp />
      <Key mouseDown={mouseDown} onHover={onHover} noteNumber={7 +((octave)*12)} note={"G"+octaveNumber} />
      <Key mouseDown={mouseDown} onHover={onHover} noteNumber={8 +((octave)*12)} note={"G#"+octaveNumber} sharp />
      <Key mouseDown={mouseDown} onHover={onHover} noteNumber={9 +((octave)*12)} note={"A"+octaveNumber} />
      <Key mouseDown={mouseDown} onHover={onHover} noteNumber={10+((octave)*12)} note={"A#"+octaveNumber} sharp />
      <Key mouseDown={mouseDown} onHover={onHover} noteNumber={11+((octave)*12)} note={"B"+octaveNumber} />
    </div>
  )
}

export default Octave

// 