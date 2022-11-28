import patterns from "../data/patterns";
import chords from "../data/chords";
import scales from "../data/scales";
import noteMap from "../data/noteMap";

export function get16Pattern(pattern) {
    if (pattern.length === 16)
        return pattern;
    if (pattern.length === 8)
        return pattern.concat(pattern);
    if (pattern.length === 4)
        return pattern.concat(pattern).concat(pattern).concat(pattern);
    else 
        return [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined];
}

export function getPatternMap(pattern) {
    let rawPattern = pattern.map((e, index) => {
        if (!e) {
            return null;
        }
        return e.step + (12 * e.transpose);
    })

    return rawPattern.map((entry, index) => {
        if (index === 0) return 0;
        if (entry != rawPattern[index - 1]) {
            return 0;
        }
        if (index > 1 &&
            entry === rawPattern[index - 1] &&
            entry === rawPattern[index - 2] &&
            entry === rawPattern[index - 3] ) {
            return 75;
        }
        if (index > 1 &&
            entry === rawPattern[index - 1] &&
            entry === rawPattern[index - 2] ){
            return 50;
        }
        return 25;
    })
}

export function getPattern(pattern){
    if (!pattern) return [];
    return pattern.map((entry, index) => {
        if (!entry) return null;
        return entry.step + (entry.transpose*12);
    });
}

export function getChordTypeForNoteInScale(rootNote, scale, note){
    if (note >= rootNote) {
        let d = note % rootNote % 12;
        let s = scales[scale];
        let i = s.scale.indexOf(d);
        let ct = s.chords[i];
        let chordType = scales[scale].chords[scales[scale].scale.indexOf(d)];
        return chordType;
    }
    return null;

}

export function isNoteInScale(keyNoteNum, scale, note){
    if (note >= keyNoteNum) {
        let d = note % keyNoteNum % 12;
        return scales[scale].scale[scales[scale].scale.indexOf(d)] >=0;
    }
    return false;
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
}


export function patternGenerator(key, pattern) {
    const root = key.rootNote;
    const scale =  scales[key.scale]?.scale;
    const patternNotes = pattern.map((p) => {
        if (!p) return null;
        let {step, transpose} = p;
        let noteNum = getNote(step, transpose, scale);
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

 
