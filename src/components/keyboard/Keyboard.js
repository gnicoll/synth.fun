import React from 'react';
import Octave from './Octave/Octave';
import PropTypes from 'prop-types';
import styles from './Keyboard.css';

const Keyboard = ({playedNote, highlightNote, onHover, notes}) => {
  const [mouseDown , setMouseDown] = React.useState(false);
  const [octaveNum , setOctaveNum] = React.useState(4);
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
      <div className={"arp_keys arp_keys--playing_"+playedNote+" arp_keys--highlighting_"+highlightNote}>
        <div className="arp_keys_shadow"></div>
        <div className='arp_keys_octave_container'>
          <div className="arp_keys_octave_up" onClick={()=>handleOctaveSet(octaveNum-1)} ></div>
          <div className="arp_keys_octave_down" onClick={()=>handleOctaveSet(octaveNum+1)}></div>
          <div className="arp_keys_rest" onClick={()=>{}}></div>
          <div 
            className={"arp_keys_octaves "+"arp_keys_octave-"+octaveNum}
            onMouseDown={() => setMouseDown(true)} 
            onMouseUp={() => setMouseDown(false)} 
            >
            {octaves.map((element, index) => 
              <Octave mouseDown={mouseDown} onHover={onHover} octaveNumber={(element)} key={index} />
            )}
          </div>
        </div>
      </div>
      <div>
        mouseDown = {mouseDown? "true":"false"}
      </div>
    </>
  )
}

Keyboard.defaultProps = {
  onClick: undefined,
  playedNote: null, 
  highlightNote: null, 
  onHover: undefined, 
  notes: [],
};

Keyboard.propTypes = {
  onClick: PropTypes.func,
  playedNote: PropTypes.object, 
  highlightNote: PropTypes.object, 
  onHover: PropTypes.func, 
  notes: PropTypes.array,
};

export default React.memo(Keyboard);
