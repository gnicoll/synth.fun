import patterns from "../data/patterns";
import chords from "../data/chords";
import scales from "../data/scales";
import noteMap from "../data/noteMap";

export function getPatternMap(pattern) {
    return pattern.Map((entry, index) => {
        if (index === 0) return 0;
        if (entry != pattern[index - 1]) {
            return 0;
        }
        if (entry === pattern[index - 1] &&
            index > 2 &&
            entry === pattern[index - 2] &&
            entry === pattern[index - 3]) {
            return 75;
        }
        if (entry === pattern[index - 1] &&
            index > 1 &&
            entry === pattern[index - 2]) {
            return 50;
        }
        return 25;
    })
}

export function getPattern(pattern){
    return pattern.map((entry, index) => {
        return entry.step + (entry.transpose*12);
    });

}

export function getChordTypeForNoteInScale(rootNote, scale, note){
    if (note >= rootNote) {
        let d = note % rootNote % 12;
        let chordType = scales[scale].chords[scales[scale].scale.indexOf(d)];
        console.log(chordType);
        return chordType;
    }
    return null;

}

// takes rootNote (num), scale 'minor'/'major' etc, and note (num)
// returns the chord for that of the note in the scale from the rootNote
export function getChordForNoteInScale(rootNote, scale, note){
    let chordType = getChordTypeForNoteInScale(rootNote, scale, note);

    if (chordType !== null && chordType !== undefined) {
        //console.log('chord: ', noteMap[note] + " " + chordType);
        return chords[chordType].notes.map(n =>{
            return n + note;
        })
    }
    else {
        return chords[scale].notes.map(n =>{
            return n + note;
        })
        
    }
    console.log(noteMap[note]);
    return [note];

}


export function patternGenerator(key, pattern) {
   // console.log('pattern: ', pattern);
    const root = key.rootNote;
    const scale =  scales[key.scale]?.scale;
  //  console.log('root: ', root);
    const patternNotes = pattern.map(({step, transpose}) => {
        //pattern is not zero indexed

 //       console.log('------------- ');
        let noteNum = getNote(step, transpose, scale);
  //      console.log('noteNum: ', noteNum);
        //if (noteNum > scale.length-1)
        //    noteNum = noteNum - scale.length;
        return noteNum;
    });
    return patternNotes;
}

function getNote(i, transpose, scale){
    let index = i;
    let noteNum = 0;
    if (index < 0) {
        index = index * -1;
   //     console.log('scale: ', scale);
    //    console.log('index: ', index);
        let calc = ((index % (scale.length-1))-1)*-1 ;
    //    console.log('calc: ', calc);
        index++;
    } else {
        index--;
     //   console.log('scale: ', scale);
    //    console.log('index: ', index);
        let calc = (index % (scale.length-1))-1;
      //  console.log('calc: ', calc);
        if (calc === 0 || index <= scale.length-1)
            noteNum = scale[index];
        else{
            noteNum = scale[calc];
            noteNum = noteNum + (Math.floor(index / (scale.length-1)) * 12);
        }
    }
    return noteNum + (12 * transpose);
}

 
